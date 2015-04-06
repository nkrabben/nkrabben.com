---
layout: page
title: Work
permalink: /work/
---

{% assign sorted_exp = site.data.work%}

{% for exp in sorted_exp  %}
<div id="experience{{ forloop.index }}" class="experience">
	<a class="accordion-toggle" data-toggle="collapse" data-text-swap="&and;" href="#projects{{ forloop.index }}">&or;</a>
	<h2><a href="{{ exp.company_url }}">{{ exp.company }}</a>, {{ exp.position }}</h2>	
	<p>{{ exp.startdate | date: "%Y %b %d" }} - {% if exp.enddate != null %}{{ exp.enddate | date: "%Y %b %d"}}{% else %}Current{% endif %}, {{exp.location}}</p>
	<div id="projects{{ forloop.index }}" class="accordion-body collapse projects">
		{% for proj in exp.projects %}
		<h4>{% if proj.url != null %}<a href="{{ proj.url }}">{{ proj.title }}</a>{% else %}{{ proj.title }}{% endif %}</h4>
		<p>{% if proj.startdate != null %}{{ proj.startdate | date: "%Y %b %d" }} - {% if proj.enddate != null %}{{ projenddate | 	date: "%Y %b %d"}}{% else %}Current{% endif %}{% endif %}<br />Purpose: {{ proj.purpose }}<br /></p>
		<ul>
			{% for task in proj.tasks %}
			<li>{{ task }}</li>
			{% endfor %}
		</ul>
		{% endfor %}
	</div>
</div>
{% endfor %}
