# See if all the characters in a string are unique
def uniqueString(aString):
	for key, char in aString:
		if char in aString[key+1:] or len(aString) == key+1: return False
	return True

def main():
	print uniqueString("abcdefghijklmnopqrstuvwxyz")

if __name__ == "__main__":
	main()