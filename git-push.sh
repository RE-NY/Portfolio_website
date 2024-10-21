if [ -z "$1" ]; then
	echo "Commit message is Required! -1"
	exit 1
fi


git add .
git commit -m "$1"
git push -u origin main


