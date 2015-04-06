---
layout: page
title: Speaking
permalink: /speaking/
---

{% assign sorted_pres = site.data.speaking %}

{% for pres in sorted_pres  %}
<div id="presentation{{ forloop.index }}" class="presentation">
	<a class="accordion-toggle" data-toggle="collapse" data-text-swap="&and;" href="#desc{{ forloop.index }}">&or;</a>
	<h3><a href="{{ pres.url }}">{{ pres.title }}</a></h3>
	<p class="about">{{ pres.author }}<br /><a href="{{ pres.conf_url }}">{{ pres.conf }}</a>, {{pres.date | date: "%Y %b %d" }}</p>
	<div id="desc{{ forloop.index }}" class="accordion-body collapse">
		<p>{{ pres.desc }}</p>
	</div>
</div>
{% endfor %}





