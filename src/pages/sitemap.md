---
layout: internal/text_page
title: Sitemap
permalink: /sitemap/
theme: "green-theme default-colored-text-theme"
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
<p class="panel">The <b>'.dev-mode-enabled'</b> class on the div <b><i>'.lv-super'</i></b> will enable the responsive helper widget. Clicking on this widget will also highlight parts of containers to aid with distinguishing layouts.</p>

<h3>Animation Enabled</h3>
<p class="panel">The <b>'.animation-enabled'</b> class on <b><i>'.lv-super'</i></b> will turn on the intro transitions for the homepage only.</p>

<h3>Splash Screen (Removed)</h3>
<strike><p class="panel">The <b>'.splash-screen-enabled'</b> class on the div <b><i>'.lv-super'</i></b> will enable the splash screen for first time visits. This uses HTML local storage (not cookies) to log the visit and will only show ONCE.<br>
To clear the key, remove the class, refresh and then re-enable.</p></strike>

<h2>Themes</h2>

<p>"Theme" classes have been created in an attempt to sandbox styles that apply to individual pages. Each theme is essentially a unique and isolated set of styles which control font colours and background images. Each page can only contain <b>one</b> main theme, and the class needs to be applied to the div <b><i>'.lv-page'</i></b> just below the opening body.</p>

<h3 style="text-transform: uppercase;">GENERIC THEMES</h3>

<ul>
	<li class="blue-text-color"><strong>blue-theme</strong></li>
	<li class="green-text-color">
		<strong>green-theme</strong>
		<ul>
			<li><strong>green-theme-stipple-main-body-bg</strong> - (optional)</li>
			<li><strong>green-theme-news</strong> (adds news styles)</li>
		</ul>
	</li>
	<li class="lime-text-color"><strong>lime-theme</strong></li>
	<li class="orange-text-color"><strong>orange-theme</strong></li>
	<li class="red-text-color"><strong>red-theme</strong></li>
	<li class="yellow-text-color"><strong>yellow-theme</strong></li>
</ul>

<h3 style="text-transform: uppercase;">UNIQUE THEMES</h3>

<ul>
	<li><strong>home-theme</strong> (exclusive to index - affects layout)</li>
	<li class="bronze-text-color"><strong>bronze-theme</strong> (exclusive to RightNow)</li>
	<li><strong>fire-theme</strong> (exclusive to Contact)</li>
	<li><strong>staff-index-theme</strong> (exclusive to our-staff)</li>
</ul>

<h3 style="text-transform: uppercase;">ADDON THEMES</h3>

<ul>
	<li><strong>blank-stage-theme</strong> (Clears stage of background)</li>
	<li><strong>default-colored-text-theme</strong> (Prevents heading colors - for sitemap only)</li>
</ul>

