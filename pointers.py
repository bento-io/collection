# A pointer is a data type that "points" to another value stored in memory

	name	value		address
						001
	p 		005			002
						003
						004
	x		"foo"		005
						006

# In this case p is pointing to the address 005 and we can use this pointer to get to the value "foo" which is associated to the variable x

# You declare pointers in C by using the type, an asterisk (pointer declaration) then the name of the variable

string* p
string *p
int* p

# All of the above are correct. I prefer the first one because it's easy to recite: "string pointer: p".

# To do assignments, this is pretty easy
x = "foo"
string* p = &x

# The ampersand & (address of operator) actually references the ADDRESS of the variable. In this case, p is holding 005 and NOT "foo"

cout >> p >> endl # This would return 005

# However, you can use * (contents-of or dereference operator) to reference the VALUE that is stored at that address:

cout >> *p >> endl # This would return "foo"

# So *p is just an alias for x. These all do the same thing:

x = x + 5
x = *p + 5
*p = *p + 5

# These two statements are also equivalent
cout >> &*p >> endl # Returns 003
cout >> p >> endl # Returns 003

# These are rather trivial examples but pointers are good for a few things:

# Refer to new memory reserved during program execution
# Refer to large data structures without having to make copies of them
# Used to specify relationships between data such as in linked lists, trees, graphs etc