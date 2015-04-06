---
layout: page
title: Writing
permalink: /writing/
---

{% assign sorted_pub = site.data.writing %}

{% for pub in sorted_pub  %}
<div id="publication{{ forloop.index }}" class="publication">
	<a class="accordion-toggle" data-toggle="collapse" data-text-swap="&and;" href="#desc{{ forloop.index }}">&or;</a>
	<h3><a href="{{ pub.url }}">{{ pub.title }}</a></h3>
	<p class="about">{{ pub.publisher }}, {{pub.date | date: "%Y %b %d" }}</p>
	<div id="desc{{ forloop.index }}" class="accordion-body collapse">
		<p class="about">{% if pub.author != null %}{{ pub.author }}{% else %}Eds. {{ pub.editor }}{% endif %}<br/>
		{{ pub.desc }}</p>
	</div>
</div>
{% endfor %}