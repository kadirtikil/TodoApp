serve:
	@php artisan serve

git:
	@git add .
	@git commit -m "automated commit"
	@git push origin HEAD:main