import wikipedia

def get_related_terms(term):
    try:
        page = wikipedia.page(term)
        return page.links
    except wikipedia.exceptions.WikipediaException:
        return []

related_terms = get_related_terms("machine learning")
print(related_terms)
