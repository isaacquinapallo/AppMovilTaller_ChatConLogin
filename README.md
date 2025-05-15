# 🔐 Ionic Firebase Login

Proyecto realizado con [Ionic Framework](https://ionicframework.com/) y [Firebase Authentication](https://firebase.google.com/docs/auth) para implementar un sistema básico de inicio de sesión con email y contraseña.

---

## 🧠 Tecnologías usadas

- ⚙️ Ionic 7 (Angular)
- 🔥 Firebase (Email/Password Auth)
- 📦 Node.js y npm
- 🛠 Capacitor (para compilación en Android/iOS, si aplica)

---

## 📁 Estructura de carpetas principal

IONIC-FIREBASE-LOGIN/
├── src/
│ ├── app/
│ │ ├── login/ # Pantalla de inicio de sesión
│ │ ├── home/ # Pantalla principal luego de login
│ │ └── services/ # Servicios de autenticación Firebase
│ ├── assets/
│ └── environments/ # Variables de entorno (Firebase config)
├── capacitor.config.json
├── firebase.json
├── angular.json
├── package.json
├── README.md
└── ...


---

## 🚀 Instalación y ejecución

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/ionic-firebase-login.git
cd ionic-firebase-login
```
2. Instala las dependencias:
```bash
npm install
```
3. Ejecuta la aplicación en desarrollo:
```bash
ionic serve
```

---

## 🔧 Configuración Firebase
Crea un proyecto en Firebase Console.

Activa el método de autenticación por Email/Contraseña.

Reemplaza la configuración en src/environments/environment.ts:
```ts
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "TU_API_KEY",
    authDomain: "TU_DOMINIO.firebaseapp.com",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_BUCKET.appspot.com",
    messagingSenderId: "ID",
    appId: "APP_ID"
  }
};
```


## 📷 Capturas de pantalla y Funcionamiento

La aplicación presenta una interfaz de chat en tiempo real. Al registrarse con un usuario y contraseña que no existen en la base de datos, el sistema crea la cuenta y redirige automáticamente al usuario a la sala de chat. En el caso de un intento de ingreso, se verifica que el usuario y la contraseña sean correctos y existan en la base de datos antes de permitir el acceso.

📌 Pantalla de Inicio de Sesión / Registro:

Esta es la pantalla inicial de la aplicación. El usuario puede ingresar sus credenciales (email y contraseña) y presionar "INGRESO" para acceder si ya tiene una cuenta. Si es un usuario nuevo, puede seleccionar "CREAR UNA CUENTA" para registrarse. El sistema valida las credenciales contra la base de datos para el ingreso y, en caso de creación de cuenta, si el usuario no existe, lo registra y lo lleva directamente al chat.
Interfaz Principal del Chat (Post-Login/Registro):
Una vez que el usuario ha ingresado o se ha registrado exitosamente, es dirigido a la pantalla principal del chat. Aquí se puede ver la lista de mensajes de otros usuarios y, en este caso particular, el navegador ofrece la opción de "Guardar contraseña" para facilitar futuros inicios de sesión. Se observa el botón "CERRAR SESIÓN" en la esquina superior derecha.

![image](https://github.com/user-attachments/assets/c7f2a0db-f90f-4578-9671-40243387d3be)

![image](https://github.com/user-attachments/assets/fbbe661a-5395-49e8-beb9-093d075529ae)

📌 Visualización de Mensajes en el Chat:

Dentro de la sala de chat, los mensajes se muestran con el email del remitente seguido del contenido del mensaje. Se puede apreciar cómo el usuario isaac.quinapallo@epn.edu.ec ha enviado el mensaje "Hola Manito voce querer mirmir xd". La interfaz permite ver el historial de la conversación.

![image](https://github.com/user-attachments/assets/e06d0fe0-f6cb-45c6-a1e4-5bbbbf5a3bfc)


📌 Interacción y Envío de Mensajes:

La captura muestra una conversación activa con mensajes de múltiples usuarios. En la parte inferior, se encuentra el campo de texto "Escribe un mensaje" (en este caso, el usuario está escribiendo "Hola") y el botón "ENVIAR" para participar en la conversación. El scroll permite navegar a través de mensajes más antiguos.

![image](https://github.com/user-attachments/assets/9e0fcdea-4151-4eb7-8319-30ebd93db639)


---

👥 Autores
Isaac Quinapallo – Desarrollador Frontend & Backend

📌 Notas
Este proyecto es parte de una práctica de inicio de sesión en apps móviles híbridas con Firebase.

Puedes extender el proyecto agregando almacenamiento, Firestore o integración con redes sociales.

