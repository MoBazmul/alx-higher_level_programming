#!/usr/bin/python3

if __name__ == "__main__":
    """
    Print the number of and list of arguments.
    """
    import sys

    count = len(sys.argv)
    if count == 1:
        print("0 arguments.")
    elif count == 2:
        print("1 argument:")
    else:
        print("{} arguments:".format(count - 1))
    for i, arg in enumerate(sys.argv[1:]):
        print("{}: {}".format(i + 1, arg))

