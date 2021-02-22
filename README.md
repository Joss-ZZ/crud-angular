### Aplicación CRUD con Angular 11
# 

![](https://i.postimg.cc/jqkzQcn0/imagen-Naruto.png)
# 
- Maquetación con CSS Grid y Flexbox.
- Uso de Angular Material.
- Pipes personalizados.
- Rutas hijas y Lazyload.
- Protección de rutas.
- JSON Server.
- Peticiones HTTP
# 

## Instalación

No olviden ejecutar el siguiente comando en la terminal para reconstruir los módulos de node e instalar las dependencias:
```
	npm install
```

Ejecutar el siguiente comando en la terminal para instalar JSON Server:
```
	npm install
```
Crear un archivo "db.json" y pegar lo siguiente:
```
{
  "usuarios": [
    {
      "id": 1,
      "usuario": "Jhosimar",
      "email": "coderjzz@gmail.com"
    }
  ],
  "personajes": [
    {
      "id": "naruto",
      "nombre": "Naruto",
      "genero": "Masculino"
    },
    {
      "id": "kakashi",
      "nombre": "Kakashi",
      "genero": "Masculino"
    },
    {
      "id": "minato",
      "nombre": "Minato",
      "genero": "Masculino"
    },
    {
      "id": "neji",
      "nombre": "Neji",
      "genero": "Masculino"
    },
    {
      "id": "obito",
      "nombre": "Obito",
      "genero": "Masculino"
    },
    {
      "id": "rocklee",
      "nombre": "Rocklee",
      "genero": "Masculino"
    },
    {
      "id": "sakura",
      "nombre": "Sakura",
      "genero": "Femenino"
    },
    {
      "id": "sasuke",
      "nombre": "Sasuke",
      "genero": "Masculino"
    }
  ]
}
```

Abrir otra ventana de la terminal, navegar hacia la carpeta en donde se encuentra su archivo "db.json" y ejecutar el siguiente comando:
```
json-server --watch db.json
```

Abrir otra ventana de la terminal y ejecutar la aplicación:
```
ng serve -o
```