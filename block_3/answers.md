Должна сказать, что Type Script до этого момента я не изучала и не работала с ним.

# 1. Is it possible to check types in runtime? If so, how?
Нет, поскольку для браузера typescript компилируется в обычный js, где типов уже нет.

# 2. What is the difference between private and protected fields?
Как приватные, так и защищенные поля недоступны “снаружи” и используются во внутреннем интерфейсе, но защищенные, в отличие от приватных, доступны в наследующих классах. Ну и есть разница в синтаксисе: приватные обозначаются хэштегом, а защищенные нижним пробелом.

# 3. How do interfaces help in development?
Наличие интерфейса позволяет не манипулировать данными напрямую, а значит снижает риски что-то сломать. Таким образом, знаю внутреннее устройство объекта необязательно для того, чтобы с ним работать.

4. How would you pass arguments into a Class?
Чтобы аргумент попал в функцию-конструктор его можно передать посредством вызова оператора new у класса.