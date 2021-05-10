---
layout: page
title: Teaching
permalink: /teaching/
---


{% assign sorted_teach = site.data.teaching %}
<div id="teaching">
	{% for teach in sorted_teach  %}<div id="teaching{{ forloop.index }}" class="teaching">
		<h2><a href="{{ teach.url }}">{{ teach.title }}</a></h2>
		<p class="about">{{ teach.author }}, {{ teach.editions }}</p>
		<a class="accordion-toggle btn btn-info" data-toggle="collapse" data-text-swap="Hide Details" href="#desc{{ forloop.index }}">Show Details</a>
		<div id="desc{{ forloop.index }}" class="accordion-body collapse">
			<p>Summary: {{ teach.desc }}</p>
		</div>
	</div>{% endfor %}
</div>