# Example filter list
filter_list = """
||youtube.com^$third-party
||googlevideo.com^$third-party
"""

# Save the filter list to a file
with open('filterlist.txt', 'w') as f:
    f.write(filter_list)
