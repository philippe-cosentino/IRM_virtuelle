function bucketPaint (ctxSource,ctxDest,large,haut,startX,startY,lumMin,lumMax) {
	var colorLayer = ctxSource.getImageData(0,0,large,haut);
	var colorLayerDest = ctxDest.getImageData(0,0,large,haut);
	var pixelPos = (startY*large + startX) * 4;
	var startCoul=colorLayer.data[pixelPos];
	console.log ("start coul="+startCoul);
	var pixelStack = [[startX, startY,startCoul]];
	var oldCoul=startCoul;
	function colorPixel(pixelPos)
	{
		var fillColorR=255;
		var fillColorG=255;
		var fillColorB=0;
		colorLayer.data[pixelPos] = fillColorR;
		colorLayer.data[pixelPos+1] = fillColorG;
		colorLayer.data[pixelPos+2] = fillColorB;
		colorLayer.data[pixelPos+3] = 255;
		colorLayerDest.data[pixelPos] = fillColorR;
		colorLayerDest.data[pixelPos+1] = fillColorG;
		colorLayerDest.data[pixelPos+2] = fillColorB;
		colorLayerDest.data[pixelPos+3] = 255;
	}
	
	function matchColor(pixelPos,oldCoul)
	{
	  var r = colorLayer.data[pixelPos];	
	  var d=Math.abs(r-oldCoul);
	  //console.log (r+" "+oldCoul+" "+d);
	  return (r <=lumMax && r>=lumMin && d<=diffLumMax);
	}
	
	while(pixelStack.length)
	{
	  var newPos, x, y, pixelPos, reachLeft, reachRight;
	  newPos = pixelStack.pop();
	  x = newPos[0];
	  y = newPos[1];
	  oldCoul= newPos[2];
	  
	  pixelPos = (y*large + x) * 4;
	  while(y-- >= 0 && matchColor(pixelPos,oldCoul))
	  {
		pixelPos -= large * 4;
	  }
	  pixelPos += large * 4;
	  ++y;
	  reachLeft = false;
	  reachRight = false;
	  while(y++ < haut-1 && matchColor(pixelPos,oldCoul))
	  {
		oldCoul=colorLayer.data[pixelPos];
		colorPixel(pixelPos);

		if(x > 0)
		{
		  if(matchColor(pixelPos - 4,oldCoul))
		  {
			if(!reachLeft){
			  pixelStack.push([x - 1, y,oldCoul]);
			  reachLeft = true;
			}
		  }
		  else if(reachLeft)
		  {
			reachLeft = false;
		  }
		}
		
		if(x < large-1)
		{
		  if(matchColor(pixelPos + 4,oldCoul))
		  {
			if(!reachRight)
			{
			  pixelStack.push([x + 1, y,oldCoul]);
			  reachRight = true;
			}
		  }
		  else if(reachRight)
		  {
			reachRight = false;
		  }
		}
				
		pixelPos += large * 4;
	  }
	}
	//ctxSource.putImageData(colorLayer, 0, 0);
	ctxDest.putImageData(colorLayerDest, 0, 0);
}