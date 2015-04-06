---
layout: page
title: Writing
permalink: /writing/
---

{% assign sorted_pub = site.data.writing %}

{% for pub in sorted_pub  %}
<div id="publication{{ forloop.index }}" class="publication">
	<h2><a href="{{ pub.url }}">{{ pub.title }}</a></h2>
	<p class="about">{{ pub.publisher }}, {{pub.date | date: "%Y %b %d" }}</p>
	<a class="accordion-toggle" data-toggle="collapse" data-text-swap="Details -" href="#desc{{ forloop.index }}">Details +</a>
	<div id="desc{{ forloop.index }}" class="accordion-body collapse">
		<p class="about">{% if pub.author != null %}Author(s): {{ pub.author }}{% else %}Editor(s): {{ pub.editor }}{% endif %}<br/>Summary: {{ pub.desc }}</p>
	</div>
</div>
{% endfor %}