def check_form_data(fields, post_data):
    for field in fields:
        try:
            post_data[field]
        except KeyError:
            return False
    return True
