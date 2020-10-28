cd ./
	for PHOTO in *.jpg
		do
			printf "Resize $PHOTO\n"
			convert "$PHOTO" -resize 1500x "1500x/1500x.$PHOTO"
		done
