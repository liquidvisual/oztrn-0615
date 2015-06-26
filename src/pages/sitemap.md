---
layout: internal/text_page
title: Sitemap
permalink: /sitemap/
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

<h3>Notes</h3>

<p class="panel">Remove <b>'.dev-mode-enabled'</b> class near the body to disable the responsive helper widget.</p>