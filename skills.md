---
layout: page
title: Skills
permalink: /skills/
---

<div id="skill">
{% for cat in site.data.skills %}
{% assign first_loop = forloop.index %}
	<div class="skills col-sm-6 col-xs-12">
		<h2>{{ cat.name }}</h2>
		{% for subcat in cat.subcategories %}
		<div>
			<a class="accordion-toggle btn btn-info" data-toggle="collapse" data-text-swap="−" href="#subcat{{ first_loop | append: forloop.index}}">+</a>
			<h3>{{ subcat.name }}</h3>
		</div>
		<ul id="subcat{{ first_loop | append: forloop.index}}" class="accordion-body collapse">
			{% for skill in subcat.skills %}
			<li>{{ skill.skill }}</li>
			{% endfor %}
		</ul>
		{% endfor %}
	</div>
{% endfor %}
</div>