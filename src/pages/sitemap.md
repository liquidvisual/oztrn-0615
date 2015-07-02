---
layout: internal/text_page
title: Sitemap
permalink: /sitemap/
theme: green-theme
---

<h2>All Available Pages for {{ site.data.settings.title }}</h2>

<ul class="triangle-list check-list">
	{% for item in site.pages %}
		<li><a href="{{ item.url }}">{{ item.layout }}</a> <small>({{ item.title }})</small></li>
	{% endfor %}
</ul>

<h2>Breakpoints (pxs)</h2>

<table style="width: 300px;">
	<tr>
		<td>Small</td>
		<td>640</td>
	</tr>
	<tr>
		<td>Medium</td>
		<td>641 - 768</td>
	</tr>
	<tr>
		<td>Large</td>
		<td>769 - 1024</td>
	</tr>
	<tr>
		<td>xLarge</td>
		<td>1025 - 1280</td>
	</tr>
	<tr>
		<td>xxLarge</td>
		<td>1281 - 1860</td>
	</tr>
</table>

<br>

<h2>Modes</h2>

<h3>Dev Mode</h3>
<p class="panel">The <b>'.dev-mode-enabled'</b> class on <b><i>'.lv-super'</i></b> will enable the responsive helper widget. Clicking on this widget will also highlight parts of containers to aid with distinguishing layouts.</p>

<h3>Splash Screen</h3>
<p class="panel">The <b>'.splash-screen-enabled'</b> class on <b><i>'.lv-super'</i></b> will enable the splash screen for first time visits. This uses HTML local storage (not cookies) to log the visit and will only show ONCE.<br>
To clear the key, remove the class, refresh and then re-enable.</p>

<h2>Themes</h2>

<p>"Theme" classes have been created in an attempt to sandbox styles that apply to individual pages. Each theme is essentially a unique and isolated set of styles which control font colours and background images. Each page can only contain <b>one</b> main theme, and the class needs to be applied to the div <b>".lv-page"</b> just below the opening body.</p>

<ul>
	<li><strong>home-theme</strong></li>
	<li><strong>blue-theme</strong></li>
	<li><strong>bronze-theme</strong></li>
	<li><strong>fire-theme</strong></li>
	<li>
		<strong>green-theme</strong>
		<ul>
			<li><strong>green-theme-stipple-main-body-bg</strong> - (optional)</li>
			<li><strong>green-theme-red-text</strong></li>
		</ul>
	</li>
	<li><strong>lime-theme</strong></li>
	<li>
		<strong>orange-theme</strong> - exclusive to "about"
		<ul>
			<li><strong>orange-theme-no-bg</strong> - exclusive to "staff"</li>
		</ul>
	</li>
	<li><strong>red-theme</strong></li>
	<li><strong>yellow-theme</strong></li>

</ul>

