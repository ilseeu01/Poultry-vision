#!/bin/bash
cd /c/Users/USER/Documents/python/poultry_vision/src/assets/images

for i in 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28; do
  echo "Converting id$i.mp4..."
  ffmpeg -i "id$i.mp4" -vcodec libx264 -profile:v baseline -pix_fmt yuv420p -movflags +faststart -y "id${i}_converted.mp4" 2>&1 | tail -5
  echo "id$i.mp4 done!"
done

echo "All conversions complete!"
