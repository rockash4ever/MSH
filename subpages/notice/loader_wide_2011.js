/*loads header & footer */
var bannercode = "";
var bannerlayer = "";
var footercode = "";
var footerlayer = "";
var menulists = "";
var lastmenu = 0;
var bnr_menu_text_style = "menudefaulttext";
var bnr_search_page = "https://search.wto.org/search";
var bnr_search_term ="";
var wto_othermenu_arrays;
var wto_dotslash;
var not_defined;
var today = new Date();
var bnr_menu_columns = (bnr_menu_text.length * 2) - 3;
var thisYear = today.getFullYear();
var page_width = 0;
var page_height = 0;
var cell_height1 = 90;
var cell_height2 = 30;
var cell_height3 = 60;
var logo = bnr_logo[0];
var newURL = window.location.protocol + "://" + window.location.host;
var pathArray = window.location.pathname.split( '/' );
var segment_2 = pathArray[2];
var CheckForIE = "";
var moreSocialMediaLink = "/english/forums_e/social_media_e.htm";
if(wto_language=="e"){moreSocialMediaLink = "/english/forums_e/social_media_e.htm";}
else if(wto_language=="f"){moreSocialMediaLink = "/french/forums_f/social_media_f.htm";}
else{moreSocialMediaLink = "/spanish/forums_s/social_media_s.htm";}
if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
{
  CheckForIE = "true";
}
if($("#breadcrumbsDiv ol li:nth-child(2)").has("span").length) {
	bcrumbsection = $.trim($("#breadcrumbsDiv ol li:nth-child(2) span").text().replace(/(\r\n|\n|\r)/gm,"").replace(/\s\s+/g, ' '));
} else {
	bcrumbsection = $.trim($("#breadcrumbsDiv ol li:nth-child(2) a").text().replace(/(\r\n|\n|\r)/gm,"").replace(/\s\s+/g, ' '));
}

	if (location.href.indexOf("https") != -1)
	{
//		wto_string = "https://www.wto.org";
		wto_dotslash = "https://www.wto.org/";
	}
	if (wto_dotslash === not_defined)
	{
		wto_dotslash = "https://www.wto.org/";
	}

	if (window.innerWidth === not_defined)
	{
		page_width = document.documentElement.clientWidth;
		page_height = document.documentElement.clientHeight;
	}
	else
	{
		page_width = window.innerWidth;
		page_height = window.innerHeight;
	}
	
	
	if (page_height < 680)
	{
		cell_height1 = 55;
		cell_height2 = 25;
		cell_height3 = 30;
	}
	// build string for banner
	bannercode = "<div class=\"pre-nav\">"+
	                "<div class=\"row\">"+
	                    "<div class=\"col-xs-4\">"+
	                        "<ul class=\"lang\">"+
	                        insert_language_links()+
	                        "</ul>"+
	                    "</div>"+

	                    "<div class=\"col-xs-8\">"+
	                        "<div class=\"rel\">";
	if (FormsPrincipal.IsAuthenticated)
	{
		bannercode += "<div class=\"btn btn-orange\"><i class=\"icon-user\"></i><span class=\"hidden-xs\">" + welcomeStr + FormsPrincipal.DisplayName + "</span> <a href=\""+get_link(myWTO[1])+"\">"+get_link(myWTO[0])+"</a> <a href=\"javascript:signOut()\">" + signoutStr + "</a></div>";
	}
	else
	{
		//loginURL="javascript:openAPopup(&#39;/login_popup_" + wto_language + ".htm?caller=" + this_page + "&#39;,'links',305,390,1)";
		loginURL="javascript:openAPopup(&#39;/login_popup_" + wto_language + ".htm&#39;,'links',380,490,1)";
		bannercode += "<a href=\""+loginURL+"\" class=\"btn btn-blue\"><i class=\"icon-user\"></i><span class=\"hidden-xs\"> " + yourAccountStr + "</span></a> <a href=\""+get_link(myWTO_public[1])+"\" class=\"btn btn-faint hidden-xs\"><i class=\"icon-user\"></i><span> myWTO</span></a>";
		
	}
// get roles for search string
var search_roles = ",public,";
if (verifyUserRoles("Secretariat"))
{
	search_roles += "%20OR%20,Secretariat,";
}
if (verifyUserRoles("DOL-R-WTO"))
{
	search_roles += "%20OR%20,DOL-R-WTO,";
}
if (verifyUserRoles("DOL-R-OBS"))
{
	search_roles += "%20OR%20,DOL-R-OBS,";
}

if (verifyUserRoles("EXT.WTO Retirees"))
{
	search_roles += "%20OR%20,EXT.WTO%20Retirees,";
}
if (verifyUserRoles("EXT.WTO External Media"))
{
	search_roles += "%20OR%20,EXT.WTO%20External%20Media,";
}

	bannercode +=         		"<ul class=\"links\">"+
	                                "<li><a href=\"" + get_link(bnr_contact[1]) + "\">" + bnr_contact[0] + "</a></li>"+
	                                "<li><a href=\"" + get_link(bnr_site[1]) + "\">" + bnr_site[0] + "</a></li>"+
	                                "<li><a href=\"" + get_link(bnr_az[1]) + "\">" + bnr_az[0] + "</a></li>"+
									
	                            "</ul>"+
							"</div>"+
	                    "</div>"+
	                "</div>"+
	            "</div>"+
	            "<div class=\"brand-search\">"+
	                "<div class=\"row\">"+
	                    "<div class=\"col-xs-6\">"+
	                        "<a href=\"" + get_link(bnr_logo[1]) + "\" id=\"logo\" class=\"navbar-brand\" data-toggle=\"tooltip\" title=\"" + bnr_logo[2] + "\" onMouseOver=\"writetxt('" + bnr_logo[2] + "')\" onMouseOut=\"writetxt(0)\"><img src=\"" + get_link(logo) + "\" alt=\"" + bnr_logo[2] + "\" class=\"img-responsive\"><span>World Trade Organization</span></a>"+
	                        "<a href=\"#skip\" class=\"sr-only\">Skip to content</a>"+
	                    "</div>"+
	                    "<div class=\"col-xs-6\">"+
	                    	"<form name=\"BannerForm\" action=\"" + search_url + "\" method=\"GET\" class=\"site-search-form\">"+
//	                    	"<form name=\"BannerForm\" action=\"" + bnr_search_page + "\" method=\"GET\" class=\"site-search-form\">"+
	//                    	"<form name=\"BannerForm\" action=\"doSearch(bnr_search_term, bnr_search_page);return false\" method=\"GET\" class=\"site-search-form\">"+
                            	"<div class=\"form-group\">"+
	                                "<label for=\"site-search\" class=\"sr-only\">Site search</label>"+
	                                //"<input type=\"text\" class=\"form-control\" id=\"site-search\" placeholder=\"" + bnr_search_value + "\">"+
//									"<input type=\"text\" name=\"q\" class=\"form-control\" id=\"searchbox\" placeholder=\"" + bnr_search_value + "\">"+
									"<input type=\"hidden\" name=\"search\" value=\"basic\"/><input type=\"text\" name=\"searchText\" class=\"form-control\" id=\"searchbox\" placeholder=\"" + bnr_search_value + "\">"+
	                                "<button type=\"submit\" class=\"btn hidden-xs\" data-toggle=\"tooltip\" title=\"" + bnr_search_callout[1] + "\" ><i class=\"icon-mag\"></i></button>"+
//									 bnr_search_fields + "<input type=\"hidden\" name=\"output\" value=\"xml_no_dtd\"/><input type=\"hidden\" name=\"numgm\" value=\"5\"/><input type=\"hidden\" name=\"proxyreload\" value=\"1\"/><input type=\"hidden\" name=\"ie\" value=\"ISO-8859-1\"/><input type=\"hidden\" name=\"oe\" value=\"ISO-8859-1\"/>" +
									 "<input type=\"hidden\" name=\"method\" value=\"pagination\"/><input type=\"hidden\" name=\"pag\" value=\"0\"/><input type=\"hidden\" name=\"roles\" value=\"" + search_roles + "\"/>" +
	                                "<a href=\"#\" class=\"btn search-overlay_open visible-xs-block\"><i class=\"icon-mag\"></i></a>"+
	                             "</div>"+
	                        "</form>"+
	                        "<div id=\"search-overlay\" class=\"hidden\">"+
							    "<form method=\"post\" action=\"\">"+
							        "<div class=\"form-group\">"+
							            "<label for=\"keywords\" class=\"sr-only\">Keyword</label>"+
							            "<input type=\"text\" class=\"form-control\" name=\"keywords\" id=\"keywords\" placeholder=\"Site search\">"+
							        "</div>"+
							        "<button type=\"submit\"><i class=\"icon-mag\"></i></button>"+
							    "</form>"+
							    "<button class=\"search-overlay_close\"><i class=\"icon-cross\"></i></button>"+
							"</div>"+
	                        "<a href=\"#menu\" class=\"menu-link pull-right\"><i class=\"icon-menu\"></i> Menu</a>"+
	                    "</div>"+
	                "</div>"+
	            "</div>"+
	            "<nav id=\"menu\" class=\"slidemenu navbar navbar-default\">"+
	            	"<ul class=\"nav navbar-nav\">";
		            // add menu items to banner string
					for (var i=1; i<bnr_menu_text.length; i++)
					{
						var active = "";
						// bannercode += '<td  width="130px" valign="top" align="left" id="Menu' + i + '" style="padding:3px" class="' + bnr_menu_text_style + '"><h2 ><a id="lnkMenu' + i + '" href="' + get_link(bnr_menu_link[i]) + '" >' + bnr_menu_text[i] + '</a></h2></td>';
						if (i == 1)
						{
							if($("#home").length>0) { active = "active"; }
							bannercode += '<li class="' + active + '"><a href="' + get_link(bnr_menu_link[i]) + '">' + bnr_menu_text[i] + '</a></li>';
							active = "";
						} else {
							if(i == 2 && bcrumbsection == "the wto" || i == 2 && bcrumbsection == "l\u2019omc" || i == 2 && bcrumbsection == "la omc") {
								active = "active";
							}
							if(i == 3 && bcrumbsection == "wto news" || i == 3 && bcrumbsection == "nouvelles omc" || i == 3 && bcrumbsection == "noticias de la omc") {
								active = "active";
							}
							if(i == 4 && bcrumbsection == "trade topics" || i == 4 && bcrumbsection == "domaines" || i == 4 && bcrumbsection == "temas comerciales") {
								active = "active";
							}
							if(i == 6 && bcrumbsection == "wto documents" || i == 6 && bcrumbsection == "documents" || i == 6 && bcrumbsection == "resources" || i == 6 && bcrumbsection == "documents omc" || i == 6 && bcrumbsection == "ressources" || i == 6 && bcrumbsection == "documentos de la omc" || i == 6 && bcrumbsection == "documentos" || i == 6 && bcrumbsection == "recursos") {
								active = "active";
							}
							if(i == 7 && bcrumbsection == "community" || i == 7 && bcrumbsection == "\u00E9changes" || i == 7 && bcrumbsection == "comunidad") {
								active = "active";
							}
							bannercode += '<li class="' + active + ' dropdown sectionmenuitem dropdown' + i + '"><a href="' + get_link(bnr_menu_link[i]) + '">' + bnr_menu_text[i] + '</a><a href="#" class="dropdown-toggle mobile-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a></li>';
						}
					}
	bannercode += 	"</ul>"+
					"<div class=\"newsletter\">"+
	                    "<h4>" + signupheader + "</h4>"+
	                    "<form class=\"signupform\">"+
	                        "<div class=\"form-group\">"+
	                            "<label for=\"email-address\" class=\"sr-only\">" + signuplabel + "</label>"+
	                            "<input type=\"email\" class=\"form-control\" name=\"email-address\" placeholder=\"" + signupplaceholdertext + "\">"+
	                            "<button type=\"submit\" class=\"newsletter-button\"><i class=\"icon-envelope\"></i></button>"+
	                        "</div>"+
	                    "</form>"+
	                "</div>"+
	            "</nav>";

	bannerlayer = document.getElementById('banner');

	bannerlayer.innerHTML = bannercode;

	footercode = "<div class=\"inset\">"+
	                "<div class=\"row\">"+
	                    "<div class=\"col-xs-12 col-md-6\">"+
	                        "<h4>" + footer_header + "</h4>"+
	                        "<p>" + footer_text + " <a href=\"" + footer_url + "\" class=\"link-blue\">" + morelink + "&nbsp;<i class=\"icon-r-arrow\"></i></a></p>"+
	                        "<hr>"+
	                    "</div>"+
	                    "<div class=\"col-xs-12 col-sm-6 col-md-push-3 col-md-3\">"+
	                        "<div class=\"newsletter\">"+
	                            "<h4>" + signupheader + "</h4>"+
	                            "<form class=\"signupform\">"+
	                                "<div class=\"form-group\">"+
	                                    "<label for=\"email-address\" class=\"sr-only\">" + signuplabel + "</label>"+
	                                    "<input type=\"email\" class=\"form-control\" name=\"email-address\" placeholder=\"" + signupplaceholdertext + "\">"+
	                                    "<button type=\"submit\" class=\"newsletter-button\"><i class=\"icon-envelope\"></i></button>"+
	                                "</div>"+
	                            "</form>"+
	                        "</div>"+
	                    "</div>"+
	                    "<div class=\"col-xs-12 col-sm-6 col-md-pull-3 col-md-3\">"+
	                        "<h4>" + footer_follow + "</h4>"+
	                        "<ul class=\"follow-wto\">"+
	                            "<li class=\"facebook\">"+
	                                "<a href=\"http://www.facebook.com/worldtradeorganization\" data-toggle=\"tooltip\" title=\"" + newwindowtext + "\" target=\"_blank\">"+
	                                    "<i class=\"icon-facebook\"></i>"+
	                                "</a>"+
	                            "</li>"+
	                            "<li class=\"twitter\">"+
	                                "<a href=\"" + twitterUrl + "\" data-toggle=\"tooltip\" title=\"" + newwindowtext + "\" target=\"_blank\">"+
	                                    "<i class=\"icon-twitter\"></i>"+
	                                "</a>"+
	                            "</li>"+
	                            "<li class=\"youtube\">"+
	                                "<a href=\"http://www.youtube.com/user/WTO\" data-toggle=\"tooltip\" title=\"" + newwindowtext + "\" target=\"_blank\">"+
	                                    "<i class=\"icon-youtube\"></i>"+
	                                "</a>"+
	                            "</li>"+
	                            "<li class=\"flickr\">"+
	                                "<a href=\"http://www.flickr.com/photos/world_trade_organization\" data-toggle=\"tooltip\" title=\"" + newwindowtext + "\" target=\"_blank\">"+
	                                    "<img src=\"/images/flickr.png\" alt=\"flickr\">"+
	                                "</a>"+
	                            "</li>"+
	                            "<li class=\"instagram\">"+
	                                "<a href=\"https://www.instagram.com/worldtradeorganization/\" data-toggle=\"tooltip\" title=\"" + newwindowtext + "\" target=\"_blank\">"+
	                                    "<i class=\"icon-instagram\"></i>"+
	                                "</a>"+
	                            "</li>"+
	                            "<li class=\"more-footer\">"+
	                                "<a href=\""+moreSocialMediaLink+"\" data-toggle=\"tooltip\" title=\"\">"+
	                                    "<i class=\"icon-plus\"></i>"+
	                                "</a>"+
	                            "</li>"+
	                           
	                        "</ul>"+
	                    "</div>"+
	                "</div>"+
	            "</div>"+
	            "<div class=\"post-footer\">"+
	                "<div class=\"row\">"+
	                    "<div class=\"col-xs-12\">"+
	                        //"<p><small><a href=\"" + get_link(footer_copy_link) + "\">&copy; " + thisYear + ", " + footer_copy_text + "</a> &nbsp;|&nbsp; <a href=\"" + get_link(footer_disclaimer_link) + "\">" + footer_disclaimer_text + "</a></small></p>"+
							  "<p><small>&copy; " + thisYear + ", " + footer_copy_text + " &nbsp;|&nbsp; <a href=\"" + get_link(footer_disclaimer_link) + "\">" + footer_disclaimer_text + "</a> &nbsp;|&nbsp; <a href=\"" + get_link(footer_copy_link) + "\">"+footer_copy_permission_text+"</a></small></p>"+
	                    "</div>"+
	                "</div>"+
	            "</div>";

// build menus

	$("#menu > .navbar-nav > li").each(function(index){
		var $this = $(this);
		var menuNum = index + 1;
		var html = "";
		var menuCol = 1;
		var columnsArry = "";
		if(menuNum > 1) {
			html += "<ul class=\"dropdown-menu\">";
			// add column containers
			if ($(window).width() > 992) {
				if(menuNum == 2 || menuNum == 3 || menuNum == 5 || menuNum == 6 || menuNum == 7) { html += '<div class="nav-grid"><div></div><div></div><div></div></div>'; }
				if(menuNum == 4) { html += '<div class="nav-grid"><div></div><div></div><div></div><div></div><div></div></div>'; }
			}
			$.each(jkmenu_array, function( index2, value2) {
				if(value2["menuid"] == menuNum) {
					if(value2["break_before"] == true) { menuCol++; }
					if (jkmenu_array[index2].menuitems.length != 0) {
						var checkTratopMobileMenu = "";
						var getMenuIndexTratop = "";
						var getPreMenuIndexTratop = "";
						if(FormsPrincipal.IsAuthenticated && (FormsPrincipal.IsInRole('Secretariat') || FormsPrincipal.IsInRole('DOL-R-WTO'))){
							getMenuIndexTratop = 12;
							getPreMenuIndexTratop = 11;
						}
						else{
							getMenuIndexTratop = 11;
							getPreMenuIndexTratop = 10;
						}
						if((index2 == getMenuIndexTratop) && ($(window).width() < 992) &&  value2["menuid"] == 4){
							checkTratopMobileMenu = "true";
						}
						else{
							html += "<li class=\"dropdown\" data-menu-col=\"" + menuCol + "\">";
						
							if (value2["callout"] != "") {
								var calloutMain = " data-placement=\"top\" data-toggle=\"popover\" title=\"" + value2["callout"] + "\"";
							} else {
								var calloutMain = "";
							}

							if(value2["subtitle_url"] != "") { 
								html += "<a href=\"" + value2["subtitle_url"]+"\" " + calloutMain +  ">"; 
							} else { 
								html += "<a>";
							}


							html += value2["subtitle"];
							html += "</a><a href=\"#\" class=\"dropdown-toggle mobile-dropdown\" data-toggle=\"dropdown\"></a>";
						}
						
						if(checkTratopMobileMenu == ""){
							html += "<ul class=\"dropdown-menu dropdown-submenu\">";//add this line back
						}
						
						
						
						$.each(jkmenu_array[index2].menuitems, function( index3, value3) {
							if (value3["new_window"] == true) {
								var target = "_blank";
							} else {
								var target = "";
							}
							if (value3["callout"] != "") {
								//var callout = " onMouseOver=\"writetxt('" + value3["callout"] + "')\" onMouseOut=\"writetxt(0)\""
								var callout = " data-placement=\"top\" data-toggle=\"popover\" title=\"" + value3["callout"] + "\"";
							} else {
								var callout = "";
							}
							if (value3["subitem"] == true) {
								html += "<li class=\"subitems\">"
							} else {
								html += "<li>"
							}
							if(value3["url"] != "") {
								html += "<a href=\"" + value3["url"] + "\" target=\"" + target + "\"" + callout + ">" + value3["title"] + "</a></li>";
							} else {
								html += value3["title"];
							}
						});
						if($(window).width() < 992){
							if((index2 == getPreMenuIndexTratop) &&  value2["menuid"] == 4){
								//html += "</ul>";
							}	
							else{
								html += "</ul>";
							}
						}
						else{
							html += "</ul>";
						}
						
					} else {
						if (value2["callout"] != "") {
							var calloutMain = " data-placement=\"top\" data-toggle=\"popover\" title=\"" + value2["callout"] + "\"";
						} else {
							var calloutMain = "";
						}
						
						if(value2["subtitle_url"] != "") {
							html += "<li data-menu-col=\"" + menuCol + "\"><a href=\"" + value2["subtitle_url"]+"\" " + calloutMain +  "\">" + value2["subtitle"] + "</a>";
							//html += "<a href=\"" + value2["subtitle_url"]+"\" " + calloutMain +  "\">"; 
						} else {
							html += "<li data-menu-col=\"" + menuCol + "\"><a>" + value2["subtitle"] + "&nbsp;</a>";
						}
					}
					if($(window).width() < 992){
						if((index2 == getPreMenuIndexTratop) &&  value2["menuid"] == 4){
							//html += "</li>";
						}
						else{
							html += "</li>";	
						}
					}
					else{
						html += "</li>";	
					}
					
				}
			});
			html += "</ul>";
			// add the menu items
			$this.append(html);
			// if desktop nav
			if ($(window).width() > 992) {
				// move class and data attribute from mobile-dropdown toggle to menu label on desktop
				$this.find("> a:first-child").addClass("dropdown-toggle");
				// $this.find("> a:first-child").addClass("dropdown-toggle").attr("data-toggle","dropdown");
				$this.find("> .mobile-dropdown").remove();
				// move menu items to columns
				$this.find("> ul.dropdown-menu > li").each(function(i){
					var column = $(this).attr("data-menu-col");
					var menuItem = $(this);
					$(this).remove();
					$this.find(".nav-grid div:nth-child(" + column + ")").append(menuItem);
				});
			}
		}
	});

	footerlayer = document.getElementById('footer');
	footerlayer.innerHTML = footercode;
	document.write("<div id=\"videolightbox\" class=\"lightbox\"><div class=\"modal fade\" id=\"video-modal\" tabindex=\"-1\" role=\"dialog\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><div class=\"modal-body\"><div id=\"popupmediaspace\" style=\"text-align:center\">Loading the player...</div><p id=\"downloadlinks\"  class=\"subnormallistitem\" align=\"right\">&gt;&nbsp;" + downloadvideostr + "<span id=\"popupotherformats\"></span> &gt;&nbsp;<a href=\"javascript:openAWindow('/" + languagestr + "/res_" + wto_language + "/doload_" + wto_language + "/doload_" + wto_language + ".htm#video','links',750,600,1)\" class=\"parasmallcolourtext\"  data-placement=\"bottom\" data-toggle=\"tooltip\" title=\"" + newwindowtext + "\" >" + helpstr + "</a></p><div id=\"popuptext\" style=\"height:350px;overflow:auto\"  ><!-- details of video appear here --></div></div></div></div></div></div>");
//	document.write("<div id=\"videolightbox\" class=\"lightbox\" style=\"position:fixed; top:0px; left:0px; width:100%; height:100%\" tabindex=\"0\"><div  id=\"lightboxcontainer\"><p class=\"strippedsmalltext\" align=\"right\"><a id=\"closelink\" href=\"javascript:hideAVideo()\"  class=\"parasmallboldtext\" tabindex=\"0\">" + close_text + "&nbsp; X</a></p><div><div id=\"popupmediaspace\" style=\"text-align:center\">Loading the player...</div><p id=\"downloadlinks\"  class=\"subnormallistitem\" align=\"right\">&gt;&nbsp;" + downloadvideostr + "<span id=\"popupotherformats\"></span> &gt;&nbsp;<a href=\"javascript:openAWindow('/" + languagestr + "/res_" + wto_language + "/doload_" + wto_language + "/doload_" + wto_language + ".htm#video','links',750,600,1)\" class=\"parasmallcolourtext\"  onMouseOver=\"writetxt('" + newwindowtext + "')\" onMouseOut=\"writetxt(0)\">" + helpstr + "</a></p><div id=\"popuptext\" style=\"height:250px;overflow:auto\"  ><!-- details of video appear here --></div></div></div></div>");
// Functions used for banner

// function toubmit to search form
function doSearch(search_term, search_page)
{
	document.forms['BannerForm'].action = search_page;
	document.forms['BannerForm'].submit();
}

// function to return the path of a link depending on which server we are
function get_link(link_name)
{
	var fulllink = "";
	if (link_name.indexOf("http") == -1)
	{
		fulllink = wto_string + link_name;
	}
	else
	{
		fulllink = link_name;
	}

	return fulllink;
}

// function to display language links based on url of current page
function insert_language_links()
{
// initialise variables
	var language_link = "";
	var language1url = "";
	var language2url = "";
	var root_folder = false;
	var search_folder = false;
	var en_lang_class = "";
	var fr_lang_class = "";
	var es_lang_class = "";
	if(wto_language == "f") {
		fr_lang_class = "active";
	} else if (wto_language == "s") {
		es_lang_class = "active";
	} else {
		en_lang_class = "active";
	}
// only do if a WTO website page
	if (wto_string == "")
	{
// if current page is home page
	if ((this_page.indexOf("/english/") == -1) && (this_page.indexOf("/french/") == -1) && (this_page.indexOf("/spanish/") == -1))
	{
		if (this_page.indexOf("/search/") == -1)
		{
			root_folder = true;			
		}
		else
		{
			search_folder = true;
		}
	}
//		if ((this_page.indexOf(home_page[0]) != -1) || (root_folder == true))
		if (root_folder == true)
		{
			language1url = home_page[0];
			language2url = home_page[1];
			language3url = home_page[2];
		}
		else if (search_folder == true)
		{
			language1url = "/search/search_e.aspx";
			language2url = "/search/search_f.aspx";
			language3url = "/search/search_s.aspx";
		}
		else
// current page is not home page
		{
			switch (bnr_this_language[0]) {
				case "/english/":
					language1url = this_page;
					language2url = this_page.replace("/english/", bnr_language1[1]);
					language2url = language2url.replace(/_e\//g, bnr_language1[2]);
					language2url = language2url.replace("_e.", bnr_language1[3]);
					language3url = this_page.replace("/english/", bnr_language2[1]);
					language3url = language3url.replace(/_e\//g, bnr_language2[2]);
					language3url = language3url.replace("_e.", bnr_language2[3]);
					break;
				case "/french/":
					language1url = this_page.replace("/french/", bnr_language1[1]);
					language1url = language1url.replace(/_f\//g, bnr_language1[2])
					language1url = language1url.replace("_f.", bnr_language1[3])
					language2url = this_page;
					language3url = this_page.replace("/french/", bnr_language2[1]);
					language3url = language3url.replace(/_f\//g, bnr_language2[2])
					language3url = language3url.replace("_f.", bnr_language2[3])
					break;
				case "/spanish/":
					language1url = this_page.replace("/spanish/", bnr_language1[1]);
					language1url = language1url.replace(/_s\//g, bnr_language1[2])
					language1url = language1url.replace("_s.", bnr_language1[3])
					language2url = this_page.replace("/spanish/", bnr_language2[1]);
					language2url = language2url.replace(/_s\//g, bnr_language2[2])
					language2url = language2url.replace("_s.", bnr_language2[3])
					language3url = this_page;
					break;
			}
		}
// build links
		// language_link = "<li><a href=\"" + language1url + "\"><span class=\"visible-xs\">??</span><span class=\"hidden-xs\">" + bnr_language1[0] + "</span></a>&nbsp;|&nbsp;<a href=\"" + language2url + "\" class=\"bannertoptext\">" + bnr_language2[0] + "</a>";
		language1url = encodeURI(language1url);
		language2url = encodeURI(language2url);
		language3url = encodeURI(language3url);
		language_link = "<li class=\"" + en_lang_class + "\"><a href=\"" + language1url + "\"><span class=\"visible-xs\">EN</span><span class=\"hidden-xs\">English</span></a></li>"+
	                    "<li class=\"" + fr_lang_class + "\"><a href=\"" + language2url + "\"><span class=\"visible-xs\">FR</span><span class=\"hidden-xs\">Fran&ccedil;ais</span></a></li>"+
	                    "<li class=\"" + es_lang_class + "\"><a href=\"" + language3url + "\"><span class=\"visible-xs\">ES</span><span class=\"hidden-xs\">Espa&ntilde;ol</span></a></li>";

	}
	return language_link;
}
// function to open a autoscroll lightbox
function openImgPopup(pageToLoad, winName, lbwidth, lbheight, center)
{
	var lightbox = document.getElementById('lightbox');
	var lightboxlayer = "";
	var framewidth = 0;
	var frameheight = 100;
	var showscroll = "auto";
	
	if (lbwidth > page_width)
	{
		framewidth = page_width - 60;
	}
	else
	{
		framewidth = lbwidth;
	}
	if (lbheight > page_height)
	{
		frameheight = page_height - 130;
		showscroll = "yes";
		if (framewidth < (page_width - 20))
		{
			framewidth += 20;
		}
	}
	else
	{
		frameheight = lbheight;
	}
	if(CheckForMobile == "False"){
		lightboxlayer = "<div class=\"modal fade\" id=\"bootstrap-modal\" tabindex=\"-1\" role=\"dialog\">"+
							"<div class=\"modal-dialog\" role=\"document\" style=\"width:"+framewidth+"px\">"+
								"<div class=\"modal-content\">";
		if(winName != "" && winName != "links") {
			lightboxlayer += 		"<div class=\"modal-header\">"+
										"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>"+
										"<h4 class=\"modal-title\">" + winName + "</h4>"+
									"</div>";
		} else {
			lightboxlayer +=		"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>";
		}
		lightboxlayer += 			"<div class=\"modal-body\"><iframe src=\"" + pageToLoad + "\" frameborder=\"0\" vspace=\"0\" hspace=\"0\" marginwidth=\"0\" marginheight=\"0\" width=\"" + framewidth + "px\" height=\"" + frameheight + "px\" scrolling=\"" + showscroll + "\" style=\"overflow:visible\"></iframe></div>"+
								"</div>"+
							"</div>"+
						"</div>";
	
		lightbox.innerHTML = lightboxlayer;
	
		$("#bootstrap-modal").modal('show');
	}
	else{
		var win = window.open(pageToLoad, '_blank');
  		win.focus();
	}
}
// function to open a autoscroll lightbox
function openAPopup(pageToLoad, winName, lbwidth, lbheight, center)
{
	var lightbox = document.getElementById('lightbox');
	var lightboxlayer = "";
	var framewidth = 0;
	var frameheight = 100;
	var showscroll = "auto";
	if (lbwidth > page_width)
	{
		framewidth = page_width - 60;
	}
	else
	{
		framewidth = lbwidth;
	}
	if (lbheight > page_height)
	{
		frameheight = page_height - 130;
		showscroll = "yes";
		if (framewidth < (page_width - 20))
		{
			framewidth += 20;
		}
	}
	else
	{
		frameheight = lbheight;
	}

	lightboxlayer = "<div class=\"modal fade\" id=\"bootstrap-modal\" tabindex=\"-1\" role=\"dialog\">"+
					  	"<div class=\"modal-dialog\" role=\"document\" style=\"width:"+framewidth+"px\">"+
					    	"<div class=\"modal-content\">";
	if(winName != "" && winName != "links") {
		lightboxlayer += 		"<div class=\"modal-header\">"+
					        		"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>"+
					        		"<h4 class=\"modal-title\">" + winName + "</h4>"+
					      		"</div>";
	} else {
		lightboxlayer +=		"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>";
	}
	lightboxlayer += 			"<div class=\"modal-body\"><iframe src=\"" + pageToLoad + "\" frameborder=\"0\" vspace=\"0\" hspace=\"0\" marginwidth=\"0\" marginheight=\"0\" width=\"" + framewidth + "px\" height=\"" + frameheight + "px\" scrolling=\"" + showscroll + "\" style=\"overflow:visible\"></iframe></div>"+
					    	"</div>"+
					  	"</div>"+
					"</div>";

	lightbox.innerHTML = lightboxlayer;

	$("#bootstrap-modal").modal('show');
}

// function to open a resizable window with vertical scroll bar
function openAWindow(pageToLoad, winName, lbwidth, lbheight, center)
{
	openAPopup(pageToLoad, winName, lbwidth, lbheight, center);
}

// function to open a lightbox without a scroll bar
function openANoScrollPopup(pageToLoad, winName, lbwidth, lbheight, center)
{
	openAPopup(pageToLoad, winName, lbwidth, lbheight, center);
}

// function to open a resizable window without a scroll bar
function openDynamicPopup(html, winName, lbwidth, lbheight, center)
{
	var lightbox = document.getElementById('lightbox');
	var lightboxlayer = "";
	var framewidth = 0;
	var frameheight = 100;
	var showscroll = "auto";
	if (lbwidth > page_width)
	{
		framewidth = page_width - 20;
	}
	else
	{
		framewidth = "100%";
	}
	if (lbheight > page_height)
	{
		frameheight = page_height - 130;
		showscroll = "yes";
		if (framewidth < (page_width - 20))
		{
			framewidth += 20;
		}
	}
	else
	{
		frameheight = lbheight;
	}

	lightboxlayer = "<div class=\"modal fade\" id=\"bootstrap-modal\" tabindex=\"-1\" role=\"dialog\">"+
					  	"<div class=\"modal-dialog\" role=\"document\">"+
					    	"<div class=\"modal-content\">";
	if(winName != "" && winName != "links") {
		lightboxlayer += 		"<div class=\"modal-header\">"+
					        		"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>"+
					        		"<h4 class=\"modal-title\">" + winName + "</h4>"+
					      		"</div>";
	} else {
		lightboxlayer +=		"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>";
	}
	lightboxlayer += 			"<div class=\"modal-body\">" + html + "</div>"+
					    	"</div>"+
					  	"</div>"+
					"</div>";

	lightbox.innerHTML = lightboxlayer;

	$("#bootstrap-modal").modal('show');
}

function hideLightBox()
{
	var lightbox = document.getElementById("lightbox");
	lightbox.innerHTML = "";
	lightbox.style.visibility = "hidden";
}

function flickrSearch()
{
	var flickrSearchString = document.flickrform.elements["search_string"].value;
	if (flickrSearchString == "")
	{
		alert("Please enter search string");
	}
	else
	{
		flickrSearchString += " and MC8";
		window.location = "http://www.flickr.com/search/?w=47180203@N08&q=" + encodeURI(flickrSearchString);
	}
}

function photoSearch()
{
	var popupURL = "";
	var flickrSearchString = document.flickrform.elements["search_string"].value;
	if (flickrSearchString == "")
	{
		alert("Please enter search string");
	}
	else
	{
		//flickrSearchString += ",MC8";
		window.location = "/english/res_e/photo_gallery_e/photo_gallery_test_e.htm?searchtag=" + encodeURI(flickrSearchString);
	//	popupURL = "/library/_test_ludo/twelve/janes_test.htm?searchtag=" + encodeURI(flickrSearchString);
	//	openAPopup(popupURL,'links',810,740,1);
	}
}

function photo2Search()
{
	var popupURL = "";
	var flickrSearchString = document.flickr2form.elements["search_string"].value;
	if (flickrSearchString == "")
	{
		alert("Please enter search string");
	}
	else
	{
		//flickrSearchString += ",MC8";
	//	window.location = "/english/res_e/photo_gallery_e/photo_gallery_test_e.htm?searchtag=" + encodeURI(flickrSearchString);
		popupURL = "/library/_test_ludo/twelve/janes_test.htm?searchtag=" + encodeURI(flickrSearchString);
		openAPopup(popupURL,'links',810,670,1);
	}
}
function urlExists(testUrl)
{
	var http = jQuery.ajax({
		type:"HEAD",
		url: testUrl,
		async: false
	})
	return http.status !=404;
}
function showText(id, linkid)
{
	document.getElementById(id).style.display = "inline";
	document.getElementById(linkid).style.display = "none";
}

function hideText(id, linkid)
{
	document.getElementById(id).style.display = "none";
	document.getElementById(linkid).style.display = "inline";
}

function falseLink(linkid)
{
	document.getElementById(linkid).style.cursor = "pointer";
	document.getElementById(linkid).style.color = "#CC6600";
}

function endFalseLink(linkid)
{
	document.getElementById(linkid).style.cursor = "default";
	document.getElementById(linkid).style.color = "#0080FF";
}

function showRows(showid)
{
	switch (showid){
		case "1" :
			$('.hiderow1').removeClass('hiderow1').addClass('showrow1');
			var showdetailslink1 = document.getElementById("showdetailslink1");
			var hidedetailslink1 = document.getElementById("hidedetailslink1");
			showdetailslink1.style.display = "none";
			hidedetailslink1.style.display = "inline";
			break;
		case "2" :
			$('.hiderow2').removeClass('hiderow2').addClass('showrow2');
			var showdetailslink2 = document.getElementById("showdetailslink2");
			var hidedetailslink2 = document.getElementById("hidedetailslink2");
			showdetailslink2.style.display = "none";
			hidedetailslink2.style.display = "inline";
			break;
	}
}
function hideRows(hideid)
{
	switch (hideid){
		case "1" :
			$('.showrow1').removeClass('showrow1').addClass('hiderow1');
			var showdetailslink1 = document.getElementById("showdetailslink1");
			var hidedetailslink1 = document.getElementById("hidedetailslink1");
			hidedetailslink1.style.display = "none";
			showdetailslink1.style.display = "inline";
			break;
		case "2" :
			$('.showrow2').removeClass('showrow2').addClass('hiderow2');
			var showdetailslink2 = document.getElementById("showdetailslink2");
			var hidedetailslink2 = document.getElementById("hidedetailslink2");
			hidedetailslink2.style.display = "none";
			showdetailslink2.style.display = "inline";
			break;
	}
}

//end

//START: Function to collapse Expand divs
function toggle_collapse(id, labelId, eve)
{
	if(eve.preventDefault)
	{eve.preventDefault();}
	else{eve.returnValue = false;}

	var e = document.getElementById(id);
	var label = document.getElementById(labelId);
	if(e.style.display == 'none'){
		$('#'+labelId).removeClass('collapsed').addClass('expanded');
		$("#"+id).slideDown();
		e.style.display = 'block';
		//$('#'+id).parent().css( "background-color", "#EEF1F6" );
    }
   else{
	  $('#'+labelId).removeClass('expanded').addClass('collapsed');
	  $("#"+id).slideUp();
      e.style.display = 'none';
	 // $('#'+id).parent().css( "background-color", "#d9e0e7" );
   }
   return false;
}
//END: Function to collapse Expand divs


/* OPTIMA ADDITIONS
=======================================================*/

// Equal Rows function
function equalHeights() {
    $('.equal-heights').matchHeight({
        byRow: true
    });
}

// Include Optima Scripts
$( window ).load(function() {
	$.getScript('/library/_op_scripts/plugins-min.js', function(){
		var md = new MobileDetect(window.navigator.userAgent);
		// slide menu plugin
		$('.menu-link').bigSlide({
		    push: 'body',
		    side: 'right',
		    menu: '.slidemenu',
		    menuWidth: 266,
		    easyClose: true,
		    beforeClose: function() {
		    	$('.slidemenu').css({'right':'-'+this.menuWidth+'px'});
		    }
		});
		// change data-content attributes to titles on tooltips
		$("[data-toggle=tooltip]").each(function(){
			if(typeof $(this).attr("data-content") !== "undefined") {
				$(this).attr("title", $(this).attr("data-content"));
			}
		});
		// mobile tooltips
		if(md.mobile() !== null) {
			$("[data-toggle=tooltip]").each(function(){
				var itemtitle = $(this).attr("title");
				$(this).removeAttr("title").removeAttr("data-toggle");
				if ($(this).find("img").length > 0) {
		            $( "<a href='#' data-original-title='"+itemtitle+"' class='tooltip-icon img-tooltip'><i class='icon-info'></i></a>" ).insertBefore(this);
		            $(this).addClass("img-tooltip-wrap");
			    } else {
			    	$( "<a href='#' data-original-title='"+itemtitle+"' class='tooltip-icon'><i class='icon-info'></i></a>" ).insertBefore(this);
			    }
			});
			$('.tooltip-icon').click(function(e) { e.preventDefault(); });
		}
		// Popovers and tooltips
		$(".tooltip-icon").tooltip({
		    placement: "auto",
		    trigger: "click"
		});
	    $("body").tooltip({
		    selector: "[data-toggle='tooltip']",
		    // placement: "auto",
		    trigger: "hover",
			html: true
		});
		$("body").popover({
		    selector: "[data-toggle='popover']",
		    trigger: "hover",
		    // placement: "auto",
		    html: true
		});
		// Initiate homepage flexslider
		$(".flexslider").flexslider({
			slideshow: true,
			nextText: slidernext,
			prevText: sliderprev,
			start: function(slider){
				// $(slider).find(".flex-next").append("&nbsp;<span>("+(slider.currentSlide+1)+"/"+slider.count+")</span>");
				if ($(window).width() <= 991){
					var slider_img_h = $(slider).find('.slides li:first-child img').height();
					$(slider).find(".flex-next, .flex-prev").css({'top':(slider_img_h - 30) + "px"}).show();
				} else {
					$(slider).find(".flex-next, .flex-prev").show();
					if(CheckForIE == "true"){
						$(slider).find(".col-md-push-4 .rel").css('right','0px');
					}
				}
			},
			after: function(slider){
				$(slider).find(".flex-next span").text("("+(slider.currentSlide+1)+"/"+slider.count+")");
				if ($(window).width() > 991){
					$(".flex-prev").show();
				}
			}
		});
		// Initiate gateway news flexslider
		// if ($(window).width() < 768){
			$(".panel-gateway-news ul").addClass("slides").wrap("<div class='gatewayslider flexslider'></div>");
			$(".gatewayslider").flexslider({
				slideshow: false,
				nextText: slidernext,
				prevText: sliderprev,
				start: function(slider){
					$(slider).find(".flex-next");
				},
				after: function(slider){
					// if ($(window).width() > 991){
						$(".flex-prev").show();
					// }
				}
			});
		// }
	    // Stop video on video modal close
	    $('#video-modal').on('hidden.bs.modal', function () {
			hideAVideo();
		});
		$(document).on('show.bs.modal', '.modal', function (event) {
            var zIndex = 1040 + (10 * $('.modal:visible').length);
            $(this).css('z-index', zIndex);
            setTimeout(function() {
                $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        });	
		
		// change data-content attributes to titles on tooltips
		$("[data-toggle=tooltip]").each(function(){
			if(typeof $(this).attr("data-content") !== "undefined") {
				$(this).attr("title", $(this).attr("data-content"));
			}
		});
		// make responsive tables more intuitive
		$(".table-responsive").each(function(){
			if($(this).get(0).scrollWidth > $(this).width()) {
				$(this).append("<div class='shadow'><i class='icon-right'></i></div>").scroll(function() {
					var that = $(this);
					var offset = that.get(0).scrollWidth - that.width();
					$(this).find(".shadow").css({"right":"-"+(that.scrollLeft()+1)+"px"});
					if(that.scrollLeft() == offset) {
						$(this).find(".shadow").hide();
					} else {
						$(this).find(".shadow").show();
					}
				});
			}
		});
		//
		if ($(window).width() < 992){
			$('.dropdown-menu a').click(function(e){
			    e.stopPropagation();
			});
			$('.dropdown-menu a.mobile-dropdown').click(function(e){
				e.preventDefault();
				$(".dropdown-submenu").hide();
				$('.dropdown-menu a.mobile-dropdown').not(this).removeClass('open');
				if($(this).hasClass('open')) {
			    	$(this).removeClass('open').next(".dropdown-submenu").hide();
			    } else {
			    	$(this).addClass('open').next(".dropdown-submenu").show();
			    }

			});
		}
		// initiate mega menus
		if ($(window).width() > 992) {
			if(md.tablet() !== null) {
    			$(".dropdown-toggle").click(function(e){
					e.preventDefault();
					$(".dropdown-toggle").parent().removeClass("open");
					$(this).parent().toggleClass("open");
				});
			} else {
				$(".dropdown-toggle").dropdownHover();
			}
		}
		if ($(window).width() < 768){
			// move designated full widths cols in to centerCol on mobile
			$(".includeInPreviousMainCol").each(function(){
				$(this).find("> *").appendTo($(this).prev(".mainDiv").find(".centerCol"));
			});
			// move left col contents to end of centerCol
			$(".leftCol").each(function(){
				$(this).next(".centerCol").append("<aside class=\"leftColAside\"></aside>");
				$(this).find("> *").not(".TreeviewSpanArea, .inpagenav, .navHeading").appendTo($(this).next(".centerCol").find(".leftColAside"));
			});
			// tiny navs
			var mainContainer = "#mainContainer";
			if($(".mainContainerLeft").length > 0) {
				mainContainer = ".mainContainerLeft";
			}
			if($(mainContainer + " .leftCol .sectionnav").length > 0) {
				$(mainContainer).append("<div class='tinynav-container'></div>");
				$(mainContainer + " .leftCol .sectionnav").each(function(){
					if($(this).hasClass("archivenav")) {
						$(this).before("<div class=\"tinynav\">"+archives+"</div>");
					} else {
						$(this).before("<div class=\"tinynav\">"+inthissection+"</div>");
					}
					$(this).prev().clone(".tinynav").appendTo(".tinynav-container");
					$(this).clone().appendTo(".tinynav-container");
				});
 			}
 			if($(mainContainer + " .leftCol .inpagenav").length > 0) {
 				$(mainContainer + " .leftCol .inpagenav").before("<div class=\"tinynav tinynav\">"+onthispage+"</div>");
 				$(mainContainer).append("<div class='pagenav-container'></div>");
 				$(mainContainer + " .leftCol .tinynav, " + mainContainer + " .leftCol .inpagenav").clone().appendTo(".pagenav-container");
 			}
 			$(".tinynav").on("click", function(){
 				$(this).toggleClass('active').next("ul").slideToggle();
 			});
 			// close tinynav when click outside

 			$("body").on("click", function(e){
 				if ($(".tinynav").length && $(".tinynav").next(".open").length && !$(e.target).parents().addBack().is(".tinynav, .open")) {
 					$(".tinynav").removeClass("active").next(".open").slideUp();
 				}
 			});
 			// search overlay
 			$('#search-overlay').popup({
		      color: 'white',
		      opacity: 0.95,
		      transition: '0.3s',
		      scrolllock: true,
		      beforeopen: function() {
		        $( "#search-overlay" ).removeClass( "hidden" )
		      }
		    });
		    $("#search-overlay form").submit(function(e){
		        e.preventDefault();
//		        $(".site-search-form #site-search").val($("#search-overlay form input").val());
		        $(".site-search-form #searchbox").val($("#search-overlay form input").val());
		        $(".site-search-form").submit();
		    });
		}
		// collapsible sub menus
        if ($(".sectionnav").length > 0) {
            $(".sectionnav a[href$='/" + pagename + "']").addClass("active");
            $(".sectionnav a[href$='/" + pagename + "']").parent("li").parent("ul").addClass('open');
            if($(".sectionnav a[href$='/" + pagename + "']").parent("li").children("ul").length) {
                $(".sectionnav a[href$='/" + pagename + "']").append("&nbsp;<span class='toggled'>[-]</span>");
            }
            $('.sectionnav li').each(function(){
                if($(this).children("ul").not(".open").length) {
                    $(this).addClass("has-submenu").find("> a").not(".active").append("&nbsp;<span>[+]</span>").next("ul").hide();
                }
                if($(this).children("ul.open").length) {
                    $(this).addClass("has-submenu").find("> a").not(".active").append("&nbsp;<span class='toggled'>[-]</span>");
                }
            });
            $('.sectionnav li a.active span').text("[-]");
            $('.sectionnav li a span').on("click", function(e){
                e.preventDefault();
                if($(this).hasClass('toggled')) {
                    $(this).removeClass("toggled").parent().next("ul").slideUp();
                    $(this).text("[+]");
                } else {
                    $(this).addClass("toggled").parent().next("ul").slideDown();
                    $(this).text("[-]");
                }
            });
        }
		$("#home").imagesLoaded( function() {
			equalHeights();
			// set meetings calendar height
			if ($(window).width() >= 768) {
				var lcolheight = $("#news-slider-destination").height();
				if (FormsPrincipal.IsAuthenticated) {
					//var targetheight = lcolheight-($('.panel-vacancies').height() + $('.meetings .clearfix').height() + $('.meetings .panel-body > .link-blue:last-child').height() + $('.meetings .panel-body > .link-blue:nth-child(3)').height() + 105);
					var targetheight = lcolheight-($('.panel-vacancies').height() + $('.panel-webcast').height() + $('.meetings .clearfix').height() + $('.meetings .panel-body > .link-blue:last-child').height() + $('.meetings .panel-body > .link-blue:nth-child(3)').height() + 105);
					if ($(window).width() >= 1200) {
						targetheight -= 30;
					}
				} else {
					//var targetheight = lcolheight-($("#publicbox").height() + $('.panel-vacancies').height() + $('.meetings .clearfix').height() + $('.meetings .panel-body > .link-blue').height() + 100);
					var targetheight = lcolheight-($("#publicbox").height() + $('.panel-vacancies').height() + $('.panel-webcast').height() + $('.meetings .clearfix').height() + $('.meetings .panel-body > .link-blue').height() + 100);
					if ($(window).width() >= 1200) {
						targetheight -= 30;
					}
				}
				$("#home .nano").height(targetheight);
			}
			// Initiate nanoScroller
			if ($(window).width() >= 768) {
				$(".nano").nanoScroller({ scrollTo: $('#todayScroll') });
			}
		});
		$(".stickythead").floatThead({
	        scrollingTop: 0
	    });
		// Footnote (fnl - footnote links)
		if ($(window).width() < 992){
			$("body").append("<div class='footnote-popover'><span class='content'></span><span class='close'><i class='icon-cross'></i></span></div>");
			$(".footnote-popover").css({"bottom":"-" + $(".footnote-popover").height() + "px"});
			$('sup a[href*=fnt-]').each(function(){
				var href = $(this).attr('href');
				$(this).click(function() {
					$('.footnote-popover').removeClass("active");
					$( ".footnote-popover .content" ).html('');
					var content = $('.footnote-list li' + href + ' span.reference-text').html();
					setTimeout(
					  function()
					  {
					    $( ".footnote-popover .content" ).append(content);
						$('.footnote-popover').addClass("active");
					  }, 300);
	                return false;
				});
		    });
		    $(".footnote-popover .close").click(function() {
                $('.footnote-popover').removeClass("active");
            });
		} else {
			$('sup a[href*=fnt-]').each(function(){
		        var href = $(this).attr('href');
		        $(this).click(function() {
				    $('.footnote-list li' + href).addClass("active");
				    setTimeout(function() {
					     $('.footnote-list li' + href).removeClass("active");
					}, 2000);
				 });
		    });
		}
		// Open and close all accordian elements
		$(".open-all").click(function() {
			$(this).removeClass("active");
			$('.close-all').addClass("active");
	        $('#accordion a[data-toggle="collapse"]').removeClass("collapsed");
	        $('.panel-collapse').addClass("in");
	        return false;
	    });
	    $(".close-all").click(function() {
			$(this).removeClass("active");
			$('.open-all').addClass("active");
	        $('#accordion a[data-toggle="collapse"]').addClass("collapsed");
	        $('.panel-collapse').removeClass("in");
	        return false;
	    });
	 //    $("[data-text]").click(function() {
	 //    	var textactive = $(this).data("text-active");
	 //    	var text = $(this).data("text");
		//     console.log(text);
		//     console.log(textactive);
		//      $(this).text(function(i, text){
	 //          return text === text ? textactive : text;
	 //      })
		// });

		// close tooltip when click outside
		$('body').on("touchstart", function(e){
			$("a[data-toggle=tooltip], a.tooltip-icon").each(function () {
				if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.tooltip').has(e.target).length === 0 && $('.tooltip-icon').has(e.target).length === 0) {
					$(this).tooltip('hide');
				}
			});
		});

	    $( ".list-group li" ).clone().appendTo( ".list-collate" );
		$('.search').keypress(function() {
		    $('.list-collate').removeClass("hidden");
		});
		var options = {
		  valueNames: [ 'element' ]
		};
		var userList = new List('quicksearch', options);
		var noItems = $('<li id="no-items-found">No items found</li>');

		userList.on('updated', function(list) {
		  if (list.matchingItems.length == 0) {
		    $(list.list).append(noItems);
		  } else {
		    noItems.detach();
		  }
		});

		if ($(window).width() < 768){
			$('.selectpicker').selectpicker({
			  	style: '',
			  	mobile: true
			});
		} else {
			$('.selectpicker').selectpicker({
			  	style: ''
			});
		}
		// collapse .well-collapse on mobile
		if ($(window).width() < 768){
			$(".well-collapse").each(function(){
				$(this).addClass("collapseItem");
				//$(this).find("*").not("h2, .backToTop").wrapAll('<div class="collapseItemContent" />');
				$(this).find(".backToTop").next('h2').andSelf().wrapAll('<div class="collapseItemTitle" />');
				$(this).find(".collapseItemTitle").nextAll().wrapAll('<div class="collapseItemContent" />');
			});
		}
		$(document).on("click", ".collapseItemTitle", function(event){
		    event.preventDefault();
		    $(this).closest('div').next('.collapseItemContent').slideToggle();
	        $(this).toggleClass("expanded");
		});
		// mobile tables
		if ($(window).width() < 768){
			$('.schedule_table').addClass("mobile-table");
		}
		var mobiletableheaders = "";
		$('.mobile-table thead tr td').each(function(e){
			var mobileindex = $(this).index();
			var mobilehtml = $(this).html();
			if(mobileindex > 0) {
				$(".mobile-table tbody tr").each(function(f){
					$(this).find("td:eq(" + mobileindex + ")").before("<span class='mobile-table-label'>" + mobilehtml + "</span>");
				});
			}
		});
		function mobile_table_label_heights(){
			$('.mobile-table tbody tr .mobile-table-label').each(function(e){
				if($(this).height() > $(this).next("td").height()) {
					$(this).next("td").height($(this).height());
				}
				if($(this).height() < $(this).next("td").height()) {
					$(this).height($(this).next("td").height());
				}
			});
		}
		// mobile_table_label_heights();
		// datatables
		var goodshash = window.location.hash;
		var datatablesPage = 0;
		if(goodshash) {
			hashIndex = $(goodshash).closest('tr').index()+1;
			datatablesPage = ((Math.floor((hashIndex / 25)+1))*25)-25;
		}
		console.log(datatablesPage);
		var goodstable = $('.schedule_table').DataTable({
	        "columnDefs": [
	            { "visible": false, "targets": 0 }
	        ],
	        "order": [[ 0, 'asc' ]],
	        "bSort" : false,
	        "displayLength": 25,
	        "displayStart": datatablesPage,
	        "drawCallback": function ( settings ) {
	            var api = this.api();
	            var rows = api.rows( {page:'current'} ).nodes();
	            var last=null;

	            api.column(0, {page:'current'} ).data().each( function ( group, i ) {
	                if ( last !== group ) {
	                    $(rows).eq( i ).before(
	                        '<tr class="group"><td colspan="7">'+group+'</td></tr>'
	                    );

	                    last = group;
	                }
	            } );
	            $(this).find("tbody tr").not(".group").hide();
	            $('.dataTables_length').find('.btn-expand').remove().end().append('<button class="btn btn-expand">+ Expand All</button>');
	            $(".dataTables_filter").find('.search-datatable').remove().end().prepend('<a title="' + dtable_search_label + '" class="search-datatable" data-toggle="tooltip"><i class="icon-info"></i></a>');
	            $(this).floatThead({
			        scrollingTop: 0,
			        headerCellSelector: '.cellheadingwhitetext:first-child'
			    });
	        }
	    });
	   $('.schedule_table').on("click", "tr.group td", function(){
	    	if($(this).parent().next('tr').is(":visible")) {
				$(this).removeClass('active').parent().next('tr').hide();
			} else {
				$(this).addClass('active').parent().next('tr').show();
				if($('.mobile-table').length > 0) {
					$(this).parent().next('tr').find('.mobile-table-label').each(function(e){
						if($(this).height() > $(this).next("td").height()) {
							$(this).next("td").height($(this).height());
						}
						if($(this).height() < $(this).next("td").height()) {
							$(this).height($(this).next("td").height());
						}
					});
				}
			}
		});
		$('.dataTables_length').on("click", ".btn-expand", function(){
			if($(this).hasClass('expanded')) {
				$(this).text('+ Expand All');
				$('.dataTable .group td').removeClass('active').parent().next('tr').hide();
			} else {
				$(this).text('- Collapse All');
				$('.dataTable .group td').addClass('active').parent().next('tr').show();
				mobile_table_label_heights();
			}
			$(this).toggleClass('expanded');
		});

		// scroll to anchor
		var hash = window.location.hash;
		if(hash) {
			if($('.schedule_table').length > 0) {
				var hashoffset = ($(hash).offset().top - $('.cellheadingwhitetext').height())-25;
				//console.log(hashoffset);
				$('html, body').animate({
					scrollTop: hashoffset
				}, 1000);
			} else {
				var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
				if(isIE){
					var hashoffset = $(hash).offset().top
				}
				else{
					var hashoffset = $(hash).offset().top
						$('html, body').animate({
						scrollTop: hashoffset
					}, 1000);
				}
			}
	    }

	    // view source buttons in TOE
	    $('.btn-view-source').after('<pre style="display:none"></pre>').on('click', function(){ 
	    	if($(this).next('pre').is(":visible")) {
	    		$(this).next('pre').hide().html('');
	    	} else {
	    		$(this).next('pre').show().html( $(this).prev('.elem-code').html().replace('<button class="btn btn-view-source">View Source</button><pre style=""></pre>','').replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]}) );
	    	}
	    });

	    // event session collapse button states
	    $('.well-session').on('click', '.btn-blue', function(){
	    	if($(this).prev('.collapse').hasClass('in')) {
	    		$(this).html($(this).attr('data-text'));
	    	} else {
	    		$(this).html($(this).attr('data-text-active'));
	    	}
	    });

	});
	$.getScript('/library/_op_scripts/onload-min.js');
	
	$('a[href*="meetings_lightbox_"]').each(function() {
	 var test = $(this).attr('href').split("?")[0];
	 var querystring = $(this).attr('href').split("?")[1]; //GuessID=123&someother=123
	 querystring = encodeURIComponent(querystring);
	 var final_url = test + "?" + querystring;
	 $(this).attr("href",final_url) ;
});
});


// Temporarily append viewport meta target with javascript
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');

// Add legacy IE stylesheet and html5 shiv
$('head').append('<!--[if lt IE 9]><script type="text/javascript" src="/library/_op_scripts/html5shiv.js"></script><![endif]-->');
$('head').append('<!--[if lt IE 9]><link rel="stylesheet" media="screen" href="/library/styles/legacy_ie.css"><![endif]-->');

// Add language class to body
$('body').addClass(wto_language);

