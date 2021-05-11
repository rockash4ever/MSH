
document.write("<script type='text/javascript' src='/library/events/responsive/lightbox/picturefill.min.js'></script>");

document.write("<script type='text/javascript' src='/library/events/responsive/lightbox/lightgallery.js'></script>");
document.write("<script type='text/javascript' src='/library/events/responsive/lightbox/lg-fullscreen.js'></script>");
document.write("<script type='text/javascript' src='/library/events/responsive/lightbox/lg-thumbnail.js'></script>");
document.write("<script type='text/javascript' src='/library/events/responsive/lightbox/lg-video.js'></script>");
document.write("<script type='text/javascript' src='/library/events/responsive/lightbox/lg-autoplay.js'></script>");
document.write("<script type='text/javascript' src='/library/events/responsive/lightbox/lg-zoom.js'></script>");
document.write("<script type='text/javascript' src='/library/events/responsive/lightbox/lg-share.js'></script>");
document.write("<script type='text/javascript' src='/library/events/responsive/lightbox/jquery.mousewheel.min.js'></script>");
var hideLGControlBar=1000;
var widthLG='100%';
if(CheckForMobile=="True"){hideLGControlBar=1000;widthLG='100%';}
else{hideLGControlBar=100000;widthLG='90%';}
function loadPhotogallery(photoGalleryName){
	
	var slideShowURL=photoGalleryName+"/gallery/album/";
	var slideShowXMLURL=photoGalleryName+"/images.xml";
	var imagesArr = [];
	//$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: slideShowXMLURL,
			dataType: "xml",
			success: function(xml) {
				
				var albumTitle = $(xml).find('album').attr('title');
				var albumDescription = $(xml).find('album').attr('description');
				var albumLGPath = $(xml).find('album').attr('lgpath');
				var albumTNPath = $(xml).find('album').attr('tnpath');
				var albumTNSPath = $(xml).find('album').attr('tnsmpath');
				var albumFSPath = $(xml).find('album').attr('fspath');
				
				$(xml).find('img').each(function() {
					imagesArr.push({
						src: slideShowURL + "fs/" +$(this).attr('src'),
						thumb: slideShowURL + "thumb/" +$(this).attr('src'),
						subHtml: "<h4>"+$(this).attr('title')+"</h4>" + "<p>"+$(this).attr('caption')+"</p>",
						downloadUrl: slideShowURL + "hd/" +$(this).attr('src')
						});
				});
				$(this).lightGallery({
        			fullScreen: true,
					dynamic: true,
        			dynamicEl: imagesArr,
					hideBarsDelay:hideLGControlBar,
					autoplay:true,
					width:widthLG
    			})
			}
		});
		
	//});
}


function loadPhotogallery_res(photoGalleryName){
	
 	var slideShowURL=photoGalleryName+"/gallery/album/";
	var slideShowXMLURL=photoGalleryName+"/images.xml";
	var shareURL = "http://www.wto.org/english/res_e/photo_gallery_e/photo_gallery_e.htm?slideshow="+ photoGalleryName.replace("/images/slideshow/","");
	var imagesArr = [];
	//$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: slideShowXMLURL,
			dataType: "xml",
			success: function(xml) {
				
				var albumTitle = $(xml).find('album').attr('title');
				var albumDescription = $(xml).find('album').attr('description');
				var albumDeskpath = $(xml).find('album').attr('deskpath');
				var albumTabpath = $(xml).find('album').attr('tabpath');
				var albumMobpath = $(xml).find('album').attr('mobpath');
				var albumTNPath = $(xml).find('album').attr('tnpath');
				
				$(xml).find('img').each(function() {
					imagesArr.push({
						src: slideShowURL + "desktop/" +$(this).attr('src'),
						thumb: slideShowURL + "thumb/" +$(this).attr('src'),
						subHtml: "<h4>"+$(this).attr('title')+"</h4>" + "<p>"+$(this).attr('caption')+"</p>",
						srcset: slideShowURL + "mobile/" +$(this).attr('src')+" 640w,"+slideShowURL + "tablet/" +$(this).attr('src')+" 995w,"+slideShowURL + "desktop/" +$(this).attr('src')+" 1200w",
						sizes:'(min-width: 40em) 80vw, 100vw',
						downloadUrl: slideShowURL + "hd/" +$(this).attr('src'),
						twitterShareUrl: shareURL, //"http://www.wto.org"+ slideShowURL + "desktop/" +$(this).attr('src'),
						facebookShareUrl: shareURL,
						googleplusShareUrl: shareURL,
						pinterestShareUrl: shareURL,
						tweetText: "Slidehow: " +albumTitle, // $(this).attr('title'),
						pinterestText: $(this).attr('title'),
						});
				});
				$(this).lightGallery({
        			fullScreen: true,
					dynamic: true,
        			dynamicEl: imagesArr,
					hideBarsDelay:hideLGControlBar,
					autoplay:true,
					width:widthLG,
					googlePlus: false,
					pinterest: false,
					galleryId: 2
    			})
			}
		});
		
	//});
}

function loadPhotogalleryByIndex(photoGalleryName,slideIndex){
	
	var slideShowURL=photoGalleryName+"/gallery/album/";
	var slideShowXMLURL=photoGalleryName+"/images.xml";
	var imagesArr = [];
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: slideShowXMLURL,
			dataType: "xml",
			success: function(xml) {
				
				var albumTitle = $(xml).find('album').attr('title');
				var albumDescription = $(xml).find('album').attr('description');
				var albumDeskpath = $(xml).find('album').attr('deskpath');
				var albumTabpath = $(xml).find('album').attr('tabpath');
				var albumMobpath = $(xml).find('album').attr('mobpath');
				var albumTNPath = $(xml).find('album').attr('tnpath');
				
				$(xml).find('img').each(function() {
					imagesArr.push({
						src: slideShowURL + "desktop/" +$(this).attr('src'),
						thumb: slideShowURL + "thumb/" +$(this).attr('src'),
						subHtml: "<h4>"+$(this).attr('title')+"</h4>" + "<p>"+$(this).attr('caption')+"</p>",
						srcset: slideShowURL + "mobile/" +$(this).attr('src')+" 640w,"+slideShowURL + "tablet/" +$(this).attr('src')+" 995w,"+slideShowURL + "desktop/" +$(this).attr('src')+" 1200w",
						sizes:'(min-width: 40em) 80vw, 100vw',
						downloadUrl: slideShowURL + "hd/" +$(this).attr('src')
						});
				});
				$(this).lightGallery({
        			fullScreen: true,
					dynamic: true,
        			dynamicEl: imagesArr,
					hideBarsDelay:hideLGControlBar,
					autoplay:true,
					index:slideIndex,
					width:widthLG
    			});
			}
		});
		
	});
}
$(document).ready(function(){
	$('#newsPhotoList').lightGallery({
		selector: '.singlePhoto'
	});
});