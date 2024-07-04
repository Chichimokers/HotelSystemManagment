-- Poblar tabla users
INSERT INTO public.users (username, conectado, rol, password, mail, sexo, edad, calle, "#casa")
VALUES
('user1', false, 'cliente', 'pass123', 'user1@email.com', 'M', 30, 'Calle 1', 101),
('user2', false, 'cliente', 'pass456', 'user2@email.com', 'F', 25, 'Calle 2', 202),
('admin1', false, 'admin', 'adminpass', 'admin1@email.com', 'M', 35, 'Calle Admin', 301),
('gerente1', false, 'gerente', 'gerentepass', 'gerente1@email.com', 'F', 40, 'Calle Gerente', 401);

-- Poblar tabla clientes
INSERT INTO public.clientes (id_user)
SELECT id FROM public.users WHERE rol = 'cliente';

-- Poblar tabla administradores
INSERT INTO public.administradores (id_admin, id_user)
SELECT id, id FROM public.users WHERE rol = 'admin';

-- Poblar tabla gerente
INSERT INTO public.gerente (id_gerente, id_user)
SELECT id, id FROM public.users WHERE rol = 'gerente';

-- Poblar tabla detales_habitacion
INSERT INTO public.detales_habitacion (id_detallesh, vista_al_mar, cant_camas)
VALUES
(1, true, 2),
(2, false, 1),
(3, true, 3);

-- Poblar tabla habitaciones
INSERT INTO public.habitaciones (cantdepersonas, precio, reservada, id_detalles)
VALUES
(2, 100, false, 1),
(1, 80, false, 2),
(3, 150, false, 3);

-- Poblar tabla deatil_room
INSERT INTO public.deatil_room (id, id_detalles, id_habitacion)
VALUES
(1, 1, 110),
(2, 2, 111),
(3, 3, 112);

-- Poblar tabla reservas
INSERT INTO public.reservas (fecha_entrada, fecha_salida, numero_huspedes, id_cliente, preciototal, cantdiasestadia, id_habitacion)
VALUES
('2024-07-01', '2024-07-05', 2, 115, 400, 4, 110),
('2024-07-10', '2024-07-15', 1, 116, 400, 5, 111);

-- Poblar tabla telefonos_users
INSERT INTO public.telefonos_users (id_telefono, id_user, numero_telefono)
VALUES
(1, 1, 123456789),
(2, 2, 987654321),
(3, 3, 555555555),
(4, 4, 444444444);

-- Poblar tabla reportes
INSERT INTO public.reportes (idr, reporte, id_habitacion)
VALUES
(1, 'Reporte de limpieza', 11333),
(2, 'Mantenimiento requerido', 11334);
