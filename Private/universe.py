COL_GREEN = '\033[38;5;46m'  # Green Color
COL_CYAN = '\033[38;5;51m'  # Cyan Color
COL_YELLOW = '\033[38;5;226m'  # Yellow Color
COL_RED = '\033[38;5;196m'  # Red Color
COL_RESET = '\033[0m'  # Color Reset      

# If Api Receives "None", it converts to ""
def noneFilter(string):
    if string != "None" or string != None:
        return string
    return ""
