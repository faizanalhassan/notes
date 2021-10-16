## convert int to binary
```
f'{14:#b}'
# output: '0b1110'

f'{14:b}'
# output: '1110'
```

## repr
```
name = "faizan"
f"{name!r}, {repr(name)}."  # repr() is equivalent to !r
```

## show var and its value:
```
foo = "bar"
f"{ foo = }"  # output: " foo = 'bar'"
```

## ascii
```
f"{'😃'!a}"  # output: "'\\U0001f603'"
```

## formatting
```
now = datetime.datetime.utcnow()
num_value = 123.456
obj = MyClass()
print(f'{now=:%Y-%m-%d}')
print(f'{num_value:.2f}')
print(f'{obj:some_format_options}')  # calls obj.__format__('some_format_options')
```
