Union type and intersection type are two very important in Typescript which make the management of our code easier. We will discuss how to use both of these and their requirements.

**Union type:**
With union type we can select any one type from multiple types. In programming language, inside the if condition we used to say that if one value is not correct, the other will be or else. Here union type and same works.
Why do we use union type?
Here we can define multiple types in the same variable through union type. This means that instead of using one type, we can use multiple types in the same variable.

#### **Example:**

```typescript
let value: string | number | boolean;
value = "hello";
value = 12;
value = true;
```

Here value variability string number can be boolean type if any other type then error will be shown.
Here we can add multiple types by using ( | ) symbol. Out of which any one type can be adopted.

**Intersection type:**
Using Intersection type we can combine two or more types to create a new type. In other programming languages, we used end between ifs to equal two values, here the intersection type does the same thing.

For example:

```typescript
Type intersectionType =type1 & type2 & type3
```

Here using this symbol type on type two and type three types all properties can be found together.

#### **Example:**

```typescript
type Person = { name: string };
type Employee = { employeeID: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Raj",
  employeeID: 123,
};
```

Difference between Union and intersection types:
Union:

1. Select any one type from multiple types
2. It is used when working with different types of data.
   Intersection:
3. The properties of multiple types are combined to form a new type.
4. It is used when more than one type of attribute is needed together.
