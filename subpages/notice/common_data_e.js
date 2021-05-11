var hide_member_info = false;  // switch to show/hide member info sitewide to members - if this has value "true" info is hidden
var showtitle = ""; // if this has value "showtitle" non active links displayed to non-logged in users
var twitterUrl = "https://twitter.com/WTO";
var photo_array = new Array();
document.write("<script type='text/javascript' src='/library/authentication/jquery-1.11.2.min.js'></script>");
document.write("<script type='text/javascript' src='/library/authentication/json2.js'></script>");
document.write("<script type='text/javascript' src='/library/authentication/jquery-cookie.js'></script>");
document.write("<script type='text/javascript' src='/library/authentication/JavaScriptPrincipal.js'></script>");
document.write("<script type='text/javascript' src='/library/wtomenus/common_logic_e.js'></script>");
document.write("<script type='text/javascript' src='/library/member_data_functions.js'></script>");
function writetxt(text){}
function fancyRollover(text){}
function largeFancyRollover(text){}

function getsectionnav(url) {
	$.getJSON( url, function( data ) {
    	var sectionnav = "<ul class='sectionnav'>";
    	$.each(data['menuItems'], function(key, val) {
    		var primaryclass = "";
    		var primaryurl = "";
    		if (val['secondaryMenuItems'] !== undefined) {
    			primaryclass = "has-submenu";
    		}
    		if (val['itemURL'] == "") {
    			primaryurl = "javascript:void(0)";
    		} else {
    			primaryurl = val['itemURL'];
    		}
		    sectionnav += "<li class='" + primaryclass + "'><a href='" + primaryurl + "'>" + val['itemLabel'] + "</a>";
		    if (val['secondaryMenuItems'] !== undefined) {
		    	sectionnav += "<ul>";
		    	$.each(val['secondaryMenuItems'], function(key2, val2) {
		    		var secondaryclass = "";
		    		var secondaryurl = "";
		    		if (val2['tertiaryMenuItems'] !== undefined) {
		    			secondaryclass = "has-submenu";
		    		}
		    		if (val2['itemURL'] == "") {
		    			secondaryurl = "javascript:void(0)";
		    		} else {
		    			secondaryurl = val2['itemURL'];
		    		}
				    var targetBlank = "";
					if(secondaryurl.indexOf(".pdf") != -1 || secondaryurl.indexOf(".doc") != -1){
						targetBlank = " target=\"_blank\"";
					}
					sectionnav += "<li class='" + secondaryclass + "'><a href='" + secondaryurl + "'"+targetBlank+">" + val2['itemLabel'] + "</a>";
				    if (val2['tertiaryMenuItems'] !== undefined) {
				    	sectionnav += "<ul>";
				    	$.each(val2['tertiaryMenuItems'], function(key3, val3) {
				    		var tertiaryurl = "";
					    	if (val3['itemURL'] == "") {
				    			tertiaryurl = "javascript:void(0)";
				    		} else {
				    			tertiaryurl = val3['itemURL'];
				    		}
							var targetBlank = "";
							if(tertiaryurl.indexOf(".pdf") != -1 || secondaryurl.indexOf(".doc") != -1){
								targetBlank = " target=\"_blank\"";
							}
				    		sectionnav += "<li><a href='" + tertiaryurl + "'"+targetBlank+">" + val3['itemLabel'] + "</a></li>";
				    	});
				    	sectionnav += "</ul>";
					}
				    sectionnav += "</li>";
		    	});
		    	sectionnav += "</ul>";
			}
		    sectionnav += "</li>";
		});
		sectionnav += "</ul>";
		$(".TreeviewSpanArea").prepend(sectionnav);
    });
}

// displays Share button & link
function showShareButton()
{
	document.write("<script type=\"text/javascript\" src=\"https://s7.addthis.com/js/250/addthis_widget.js#username=xa-4b7430d06b5ceda5\"></script><div class='addthis_toolbox addthis_default_style addthis_32x32_style'><a class='addthis_button_facebook'></a><a class='addthis_button_twitter'></a><a class='addthis_button_linkedin'></a><a class='addthis_button_more'></a></div>");
}

// inserts image with same filename as publication page on publication page
function insertPublicationImg()
{
	var thispagearray = pagename.split(".");
	if (thispagearray.length > 0)
	{
	document.writeln("<img src=\"/images/img_bkshop/" + thispagearray[0] + ".jpg\" alt=\"publication image\" class=\"img-responsive\">");
	}	
}
var myWTO = ["myWTO", "/english/forums_e/personalization_e/xpersonalization_e/mywto_e.htm"];
var myWTO_public = ["myWTO", "/english/forums_e/personalization_e/mywto_public_e.htm"];