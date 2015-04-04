---
layout: page
title: Experience
permalink: /experience/
---

{% assign sorted_exp = site.data.experience %}

{% for exp in sorted_exp  %}
<div id="experience{{ forloop.index }}" class="experience">
	<div class="media">
		<div class="media-left">
			<a href="{{ exp.company_url }}">
				<img class="media-object" src="{{ exp.company_img }}" alt="{{ exp.company }} logo">
			</a>
		</div>
		<div class="media-body">
			<h2 class="media-heading"><a href="{{ exp.company_url }}">{{ exp.company }}</a>, {{ exp.position }}</h2>
			<p>{{ exp.startdate | date: "%Y %b %d" }} - {% if exp.enddate != null %}{{ exp.enddate | date: "%Y %b %d"}}{% else 	%}current{% endif %}<br />{{exp.location}}</p>
		</div>
	</div>
	<div>
	<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#projects{{ forloop.index }}">Show Projects</button>
	</div>
	<div id="projects{{ forloop.index }}" class="collapse">
		<h3>Projects</h3>
		{% for proj in exp.projects %}
		<h4>{% if proj.url != null %}<a href="{{ proj.url }}">{{ proj.title }}</a>{% else %}{{ proj.title }}{% endif %}</h4>
		<p>{% if proj.startdate != null %}{{ proj.startdate | date: "%Y %b %d" }} - {% if proj.enddate != null %}{{ proj.enddate | 	date: "%Y %b %d"}}{% else %}current{% endif %}{% endif %}<br />Purpose: {{ proj.purpose }}<br />
			<ul>
				{% for task in proj.tasks %}
				<li>{{ task }}</li>
				{% endfor %}
			</ul>
		</p>
		{% endfor %}
	</div>
</div>
{% endfor %}





