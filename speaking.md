---
layout: page
title: Speaking
permalink: /speaking/
---

{% assign sorted_pres = site.data.speaking %}
<div id="presentations">
	<h1>Presentations</h1>
	{% for pres in sorted_pres  %}<div id="presentation{{ forloop.index }}" class="presentation">
		<h2><a href="{{ pres.url }}">{{ pres.title }}</a></h2>
		<p class="about"><a href="{{ pres.conf_url }}">{{ pres.conf }}</a>, {{pres.date | date: "%Y %b %d" }}</p>
		<a class="accordion-toggle" data-toggle="collapse" data-text-swap="Details -" href="#desc{{ forloop.index }}">Details +</a>
		<div id="desc{{ forloop.index }}" class="accordion-body collapse">
			<p>Presenter(s): {{ pres.author }}<br />Summary: {{ pres.desc }}</p>
		</div>
	</div>{% endfor %}
</div>





