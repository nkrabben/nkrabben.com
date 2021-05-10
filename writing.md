---
layout: page
title: Writing
permalink: /writing/
---

{% assign sorted_pub = site.data.writing %}
<div id="publications">
	{% for pub in sorted_pub  %}<div id="publication{{ forloop.index }}" class="publication">
		<h2>{% if pub.url %}<a href="{{ pub.url }}">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}</h2>
		<p class="about">{{ pub.publisher }}, {{pub.date | date: "%Y %b %d" }}<br />{% if pub.author != null %}Author(s): {{ pub.author }}{% else %}Editor(s): {{ pub.editor }}{% endif %}</p>
		{% if pub.desc %}<a class="accordion-toggle btn btn-info" data-toggle="collapse" data-text-swap="Hide Details" href="#desc{{ forloop.index }}">Show Details</a>
		<div id="desc{{ forloop.index }}" class="accordion-body collapse">
			<p class="about"><br/>{{ pub.desc }}</p>
		</div>{% endif %}
	</div>{% endfor %}
</div>