all: index.html


index.html: index.src.html mymap.js myhawkers.json
	m4 -PEIinc index.src.html > index.html

clean:
	rm -f index.html
