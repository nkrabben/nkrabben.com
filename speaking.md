---
layout: page
title: Speaking
permalink: /speaking/
---

{% assign sorted_pres = site.data.speaking %}

{% for pres in sorted_pres  %}
<div id="presentation{{ forloop.index }}" class="presentation">
	<h2><a href="{{ pres.url }}">{{ pres.title }}</a></h2>
	<p>{{ pres.author }}<br /><a href="{{ pres.conf_url }}">{{ pres.conf }}</a>, {{pres.date | date: "%Y %b %d" }}</p>
	<p>{{ pres.desc }}
</div>
{% endfor %}





