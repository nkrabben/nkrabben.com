---
layout: page
title: Writing
permalink: /writing/
---

{% assign sorted_pub = site.data.writing %}

{% for pub in sorted_pub  %}
<div id="publication{{ forloop.index }}" class="publication">
	<h3><a href="{{ pub.url }}">{{ pub.title }}</a></h3>
	<p>{% if pub.author != null %}{{ pub.author }}{% else %}Eds. {{ pub.editor }}{% endif %}<br />{{ pub.publisher }}, {{pub.date | date: "%Y %b %d" }}</p>
	<p>{{ pub.desc }}
</div>
{% endfor %}