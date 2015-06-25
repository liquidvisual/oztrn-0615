---
layout: homepage
title: Contact Us
permalink: /contact/
theme: "fire-theme"
sidebar_content: "sidebar/sidebar_contact_form.html"
---

{% assign settings = site.data.settings %}

{{ settings.company }} <br>
{{ settings.address }} <br>
p <a href="tel:{{ settings.phone }}">{{ settings.phone }}</a> <br>
<a href="tel:{{ settings.email }}">{{ settings.email }}</a>