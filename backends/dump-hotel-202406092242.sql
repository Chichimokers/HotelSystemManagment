PGDMP         *        	        |           hotel    14.1    14.1 4    A           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            B           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            C           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            D           1262    16713    hotel    DATABASE     a   CREATE DATABASE hotel WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE hotel;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            E           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    16714    administradores    TABLE     e   CREATE TABLE public.administradores (
    id_admin integer NOT NULL,
    id_user integer NOT NULL
);
 #   DROP TABLE public.administradores;
       public         heap    postgres    false    3            �            1259    16717    clientes    TABLE     `   CREATE TABLE public.clientes (
    id_cliente integer NOT NULL,
    id_user integer NOT NULL
);
    DROP TABLE public.clientes;
       public         heap    postgres    false    3            �            1259    16720    deatil_room    TABLE     q   CREATE TABLE public.deatil_room (
    id integer NOT NULL,
    id_detalles integer,
    id_habitacion integer
);
    DROP TABLE public.deatil_room;
       public         heap    postgres    false    3            �            1259    16723    detales_habitacion    TABLE     �   CREATE TABLE public.detales_habitacion (
    id_detallesh integer NOT NULL,
    vista_al_mar boolean,
    cant_camas integer
);
 &   DROP TABLE public.detales_habitacion;
       public         heap    postgres    false    3            �            1259    16726    gerente    TABLE     _   CREATE TABLE public.gerente (
    id_gerente integer NOT NULL,
    id_user integer NOT NULL
);
    DROP TABLE public.gerente;
       public         heap    postgres    false    3            �            1259    16729    habitaciones    TABLE     �   CREATE TABLE public.habitaciones (
    id integer NOT NULL,
    cantdepersonas integer,
    id_reservacion integer,
    precio integer,
    reservada boolean,
    id_detalles integer,
    image text DEFAULT 'assets/images.jpg'::text NOT NULL
);
     DROP TABLE public.habitaciones;
       public         heap    postgres    false    3            �            1259    16732    reportes    TABLE     u   CREATE TABLE public.reportes (
    idr integer NOT NULL,
    reporte character varying,
    id_habitacion integer
);
    DROP TABLE public.reportes;
       public         heap    postgres    false    3            �            1259    16737    reservas    TABLE     �   CREATE TABLE public.reservas (
    id integer NOT NULL,
    fecha_entrada date,
    fecha_salida date,
    numero_huspedes integer,
    id_cliente integer,
    preciototal integer,
    cantdiasestadia integer
);
    DROP TABLE public.reservas;
       public         heap    postgres    false    3            �            1259    16740    telefonos_users    TABLE     |   CREATE TABLE public.telefonos_users (
    id_telefono integer NOT NULL,
    id_user integer,
    numero_telefono integer
);
 #   DROP TABLE public.telefonos_users;
       public         heap    postgres    false    3            �            1259    16749    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    3            �            1259    16743    users    TABLE     e  CREATE TABLE public.users (
    username character varying,
    id smallint DEFAULT nextval('public.users_id_seq'::regclass) NOT NULL,
    conectado boolean DEFAULT false,
    rol character varying,
    password character varying,
    mail character varying,
    sexo character varying,
    edad integer,
    calle character varying,
    "#casa" integer
);
    DROP TABLE public.users;
       public         heap    postgres    false    219    3            4          0    16714    administradores 
   TABLE DATA           <   COPY public.administradores (id_admin, id_user) FROM stdin;
    public          postgres    false    209   �=       5          0    16717    clientes 
   TABLE DATA           7   COPY public.clientes (id_cliente, id_user) FROM stdin;
    public          postgres    false    210   >       6          0    16720    deatil_room 
   TABLE DATA           E   COPY public.deatil_room (id, id_detalles, id_habitacion) FROM stdin;
    public          postgres    false    211   ">       7          0    16723    detales_habitacion 
   TABLE DATA           T   COPY public.detales_habitacion (id_detallesh, vista_al_mar, cant_camas) FROM stdin;
    public          postgres    false    212   ?>       8          0    16726    gerente 
   TABLE DATA           6   COPY public.gerente (id_gerente, id_user) FROM stdin;
    public          postgres    false    213   \>       9          0    16729    habitaciones 
   TABLE DATA           q   COPY public.habitaciones (id, cantdepersonas, id_reservacion, precio, reservada, id_detalles, image) FROM stdin;
    public          postgres    false    214   y>       :          0    16732    reportes 
   TABLE DATA           ?   COPY public.reportes (idr, reporte, id_habitacion) FROM stdin;
    public          postgres    false    215   @       ;          0    16737    reservas 
   TABLE DATA           ~   COPY public.reservas (id, fecha_entrada, fecha_salida, numero_huspedes, id_cliente, preciototal, cantdiasestadia) FROM stdin;
    public          postgres    false    216   %@       <          0    16740    telefonos_users 
   TABLE DATA           P   COPY public.telefonos_users (id_telefono, id_user, numero_telefono) FROM stdin;
    public          postgres    false    217   T@       =          0    16743    users 
   TABLE DATA           i   COPY public.users (username, id, conectado, rol, password, mail, sexo, edad, calle, "#casa") FROM stdin;
    public          postgres    false    218   �@       F           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 40, true);
          public          postgres    false    219            �           2606    16751 "   administradores administradores_pk 
   CONSTRAINT     f   ALTER TABLE ONLY public.administradores
    ADD CONSTRAINT administradores_pk PRIMARY KEY (id_admin);
 L   ALTER TABLE ONLY public.administradores DROP CONSTRAINT administradores_pk;
       public            postgres    false    209            �           2606    16753 &   administradores administradores_unique 
   CONSTRAINT     d   ALTER TABLE ONLY public.administradores
    ADD CONSTRAINT administradores_unique UNIQUE (id_user);
 P   ALTER TABLE ONLY public.administradores DROP CONSTRAINT administradores_unique;
       public            postgres    false    209            �           2606    16755    clientes clientes_pk 
   CONSTRAINT     Z   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pk PRIMARY KEY (id_cliente);
 >   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_pk;
       public            postgres    false    210            �           2606    16757    clientes clientes_unique 
   CONSTRAINT     V   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_unique UNIQUE (id_user);
 B   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_unique;
       public            postgres    false    210            �           2606    16759 (   detales_habitacion detales_habitacion_pk 
   CONSTRAINT     p   ALTER TABLE ONLY public.detales_habitacion
    ADD CONSTRAINT detales_habitacion_pk PRIMARY KEY (id_detallesh);
 R   ALTER TABLE ONLY public.detales_habitacion DROP CONSTRAINT detales_habitacion_pk;
       public            postgres    false    212            �           2606    16761 "   deatil_room detalles_habitacion_pk 
   CONSTRAINT     `   ALTER TABLE ONLY public.deatil_room
    ADD CONSTRAINT detalles_habitacion_pk PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.deatil_room DROP CONSTRAINT detalles_habitacion_pk;
       public            postgres    false    211            �           2606    16763    gerente gerente_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.gerente
    ADD CONSTRAINT gerente_pk PRIMARY KEY (id_gerente);
 <   ALTER TABLE ONLY public.gerente DROP CONSTRAINT gerente_pk;
       public            postgres    false    213            �           2606    16765    gerente gerente_unique 
   CONSTRAINT     T   ALTER TABLE ONLY public.gerente
    ADD CONSTRAINT gerente_unique UNIQUE (id_user);
 @   ALTER TABLE ONLY public.gerente DROP CONSTRAINT gerente_unique;
       public            postgres    false    213            �           2606    16767    habitaciones habitaciones_pk 
   CONSTRAINT     Z   ALTER TABLE ONLY public.habitaciones
    ADD CONSTRAINT habitaciones_pk PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.habitaciones DROP CONSTRAINT habitaciones_pk;
       public            postgres    false    214            �           2606    16769     habitaciones habitaciones_unique 
   CONSTRAINT     b   ALTER TABLE ONLY public.habitaciones
    ADD CONSTRAINT habitaciones_unique UNIQUE (id_detalles);
 J   ALTER TABLE ONLY public.habitaciones DROP CONSTRAINT habitaciones_unique;
       public            postgres    false    214            �           2606    16771    reportes reportes_pk 
   CONSTRAINT     S   ALTER TABLE ONLY public.reportes
    ADD CONSTRAINT reportes_pk PRIMARY KEY (idr);
 >   ALTER TABLE ONLY public.reportes DROP CONSTRAINT reportes_pk;
       public            postgres    false    215            �           2606    16773    reservas reservas_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.reservas
    ADD CONSTRAINT reservas_pk PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.reservas DROP CONSTRAINT reservas_pk;
       public            postgres    false    216            �           2606    16775 "   telefonos_users telefonos_users_pk 
   CONSTRAINT     i   ALTER TABLE ONLY public.telefonos_users
    ADD CONSTRAINT telefonos_users_pk PRIMARY KEY (id_telefono);
 L   ALTER TABLE ONLY public.telefonos_users DROP CONSTRAINT telefonos_users_pk;
       public            postgres    false    217            �           2606    16777    users users_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pk;
       public            postgres    false    218            �           2606    16778 (   administradores administradores_users_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.administradores
    ADD CONSTRAINT administradores_users_fk FOREIGN KEY (id_user) REFERENCES public.users(id);
 R   ALTER TABLE ONLY public.administradores DROP CONSTRAINT administradores_users_fk;
       public          postgres    false    218    209    3230            �           2606    16783    clientes clientes_users_fk    FK CONSTRAINT     y   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_users_fk FOREIGN KEY (id_user) REFERENCES public.users(id);
 D   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_users_fk;
       public          postgres    false    218    210    3230            �           2606    16788 5   deatil_room detalles_habitacion_detales_habitacion_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.deatil_room
    ADD CONSTRAINT detalles_habitacion_detales_habitacion_fk FOREIGN KEY (id_detalles) REFERENCES public.detales_habitacion(id_detallesh);
 _   ALTER TABLE ONLY public.deatil_room DROP CONSTRAINT detalles_habitacion_detales_habitacion_fk;
       public          postgres    false    211    212    3214            �           2606    16793 /   deatil_room detalles_habitacion_habitaciones_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.deatil_room
    ADD CONSTRAINT detalles_habitacion_habitaciones_fk FOREIGN KEY (id_habitacion) REFERENCES public.habitaciones(id);
 Y   ALTER TABLE ONLY public.deatil_room DROP CONSTRAINT detalles_habitacion_habitaciones_fk;
       public          postgres    false    3220    211    214            �           2606    16798    gerente gerente_users_fk    FK CONSTRAINT     w   ALTER TABLE ONLY public.gerente
    ADD CONSTRAINT gerente_users_fk FOREIGN KEY (id_user) REFERENCES public.users(id);
 B   ALTER TABLE ONLY public.gerente DROP CONSTRAINT gerente_users_fk;
       public          postgres    false    218    3230    213            �           2606    16803 /   habitaciones habitaciones_detales_habitacion_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.habitaciones
    ADD CONSTRAINT habitaciones_detales_habitacion_fk FOREIGN KEY (id_detalles) REFERENCES public.detales_habitacion(id_detallesh);
 Y   ALTER TABLE ONLY public.habitaciones DROP CONSTRAINT habitaciones_detales_habitacion_fk;
       public          postgres    false    3214    212    214            �           2606    16808 %   habitaciones habitaciones_reservas_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.habitaciones
    ADD CONSTRAINT habitaciones_reservas_fk FOREIGN KEY (id_reservacion) REFERENCES public.reservas(id);
 O   ALTER TABLE ONLY public.habitaciones DROP CONSTRAINT habitaciones_reservas_fk;
       public          postgres    false    214    216    3226            �           2606    16813    reportes reportes_reservas_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.reportes
    ADD CONSTRAINT reportes_reservas_fk FOREIGN KEY (id_habitacion) REFERENCES public.reservas(id);
 G   ALTER TABLE ONLY public.reportes DROP CONSTRAINT reportes_reservas_fk;
       public          postgres    false    215    3226    216            �           2606    16818    reservas reservas_users_fk    FK CONSTRAINT     |   ALTER TABLE ONLY public.reservas
    ADD CONSTRAINT reservas_users_fk FOREIGN KEY (id_cliente) REFERENCES public.users(id);
 D   ALTER TABLE ONLY public.reservas DROP CONSTRAINT reservas_users_fk;
       public          postgres    false    216    218    3230            �           2606    16823 (   telefonos_users telefonos_users_users_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.telefonos_users
    ADD CONSTRAINT telefonos_users_users_fk FOREIGN KEY (id_user) REFERENCES public.users(id);
 R   ALTER TABLE ONLY public.telefonos_users DROP CONSTRAINT telefonos_users_users_fk;
       public          postgres    false    217    3230    218            4      x������ � �      5      x������ � �      6      x������ � �      7      x������ � �      8      x������ � �      9     x���Mn1����a�8�_.��aAQ+U��W1#6�^����8Y�"���ܗ��r��.������z��}�^ױ<^b����ٖ���Vb{ �<aψY��=Bʈؚ|��2#�Eª��,2�Jت?�hن��i�S�����8>n�{+Q�b����_�{�(�*��R�y���l8EH���*��T)�E�JQݏ��_��{+V�^sO���[��k���c�Z�(Z�V��7h��H�2&��F[E�hG+�+A��(ou���4ɊN�b����mk�LъZ1'+h���D+����xG+>Њ+YqC+�h��x��h%Z	�%�NVb��P��V��JZ�D+1�J6���V���h%�����t���V�ٞ��u�\�      :      x������ � �      ;      x�3��!#cNC��*D0�=... �N      <      x�3�4�4626". ���1����� :�      =   g  x���I��XF���U/�ǨM�@
� (��'�<��6+�:����J_h�(��x/�Uh
 �,��+k�r���UQ6����6�J�`Ь�Q�{}��O�}{I�'釓��I��$�<E�b�~?�����+�}E����)��p��]���ɻ���[D~��=��������L;�aSw��c��;̽8� ���'�H;t�R�M7X�r2M����?_���S]x8u"$㢓���	"� =\��C�U�g�Bri��7���`�B��@°���L��i����H-�!���~K��U�z�o�4����̠8e�b���h����FzA\��[�����֒�W��W���3c�$��ʨ�6�u��,|}�������j����h������*3�J�otM珥���s5<���Udv��n��� M����~����!����.����#���z`��������qp�D�>x�,���t��?3*�_�0d�D9�w'�,U��V&���[]������8�E�0IE7�SY~��۷7^��K֍pJ%7��=�k>����%�p�h'��$4�U�bm�{%K�Y�w��O����-Ԟ��v!]�m��r5��
��=�ԓ �g��܎�b��;m(,���}�Xį���c
������`����n���ղ����$?
a��/l9�ִ�Sڝh��c4sRe��f�=M�Z�E�EZ���:�� ���=>�1������ho﻿zՙ1�\h�Z` �� ��������66���P���RC};���'g�y�����xx�+0>�v�A�y�?F�Uu����8�_����VII#pU�{� HO,���#�o�[D,s@���X`9M1�;<ϐ腂.(ű�8�hּ��}sm��D�n!უ�#�m������(�������-(�oo}���AːK���jp�^�1��Id�d�������c����'8���n�~�]��΁����p:�j�6���%4�[^;6� �cL��!��v�n����HFR�]�4�;ư�C4xN�>�=Y�\H��z7����`�zkR����3�+E�"��`���Koݚ<��X�	W-6`\T˝��C-0���!<W��n{KWU�s@��ԫ�%��0���8�-��a�� z�xԫb]�a��$zـ��!÷c��\�Q����t�$�'�����;�Y���J�){�v�%mq���$#��4��4]�#s;~"u����Hi���.X���Y`M��S�@�Mm'�V�]���p��m����������,���9oX��Xvy+s�y�A�Q!��(��=7��|$�ֶ�ڋ\~��!qM��҇2/��˗/�����     