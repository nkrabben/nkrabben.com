---
layout: page
title: Speaking
permalink: /speaking/
---

{% assign sorted_pres = site.data.speaking %}
<div id="presentations">
	{% for pres in sorted_pres  %}<div id="presentation{{ forloop.index }}" class="presentation">
		<h2>{% if pres.url %}<a href="{{ pres.url }}">{{ pres.title }}</a>{% else %}{{ pres.title }}{% endif %}</h2>
		<p class="about">{% if pres.conf_url %}<a href="{{ pres.conf_url }}">{{ pres.conf }}</a>{% else %}{{ pres.conf }}{% endif %}, {{ pres.conf_loc}}, {{pres.date | date: "%Y %b %d" }}<br />Presenter(s): {{ pres.author }}</p>
		{% if pres.desc %}<a class="accordion-toggle btn btn-info" data-toggle="collapse" data-text-swap="Hide Details" href="#desc{{ forloop.index }}">Show Details</a>
		<div id="desc{{ forloop.index }}" class="accordion-body collapse">
			<p>Summary: {{ pres.desc }}</p>
		</div>{% endif %}
	</div>{% endfor %}
</div>
