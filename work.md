---
layout: page
title: Work
permalink: /work/
---

{% assign sorted_exp = site.data.work%}
<div id="experience">
	{% for exp in sorted_exp  %}<div class="group">
		<div id="experience{{ forloop.index }}" class="experience col-sm-4">
			<h2><a href="{{ exp.company_url }}">{{ exp.company }}</a>, {{ exp.position }}</h2> 
			<p class="about">{{ exp.startdate | date: "%Y %b %d" }} - {% if exp.enddate != null %}{{ exp.enddate | date: "%Y %b %d"}}{% else %}Current{% endif %}, {{exp.location}}</p>
			<a class="accordion-toggle" data-toggle="collapse" data-text-swap="Projects -" href="#projects{{ forloop.index }}">Projects +</a>
		</div>
		<div id="projects{{ forloop.index }}" class="accordion-body collapse projects col-sm-8">{% for proj in exp.projects %}
			<div class="project">
				<h4>{% if proj.url != null %}<a href="{{ proj.url }}">{{ proj.title }}</a>{% else %}{{ proj.title }}{% endif %}</h4>
				<p>{% if proj.startdate != null %}{{ proj.startdate | date: "%Y %b %d" }} - {% if proj.enddate != null %}{{ proj.enddate | 	date: "%Y %b %d"}}{% else %}Current{% endif %}{% endif %}<br />Purpose: {{ proj.purpose }}<br /></p>
				<ul>
					{% for task in proj.tasks %}<li>{{ task }}</li>
					{% endfor %}
				</ul>
			</div>{% endfor %}
		</div>
	</div>{% endfor %}
</div>