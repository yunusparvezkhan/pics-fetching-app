### Version 1
The first version of the app is finally ready. This app interface has a input promt on the top of the screen for users to pass keywords of the quired images. Then the app takes those keywords after user hits enter and sends a request to https://api.unsplash.com/ for image results. The app takes unsplash results and maps those below the search promt.

## Version 1 efficiency patch-001
In this patch update, all the unneccessary codes that were written during product R&D were cleared. Hopefully it makes the app a little bit more efficient.

## Version 1 efficiency patch-002
Search icon on the search box is made functional through this patch.

## Version 1 efficiency patch-003
The unique key prop for all the root elements rendered in the list is set to those elements' id fetched from the api. This makes the key unique to all the results, as the api org must have assigned unique ids to each result. Previously the elements had the index number of them on the list as the key prop, which is very unefficient as this can give same key to different images/results. Also added the alt prop on the image element inside the map, which assings alt prop to all images in the list fetching the 'description' key from each image from the api.