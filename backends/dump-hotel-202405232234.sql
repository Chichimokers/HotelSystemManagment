PGDMP         "                |           hotel    14.1    14.1                 0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16395    hotel    DATABASE     a   CREATE DATABASE hotel WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE hotel;
                postgres    false                        2615    16396    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �            1259    16561    empledos    TABLE     z   CREATE TABLE public.empledos (
    id integer NOT NULL,
    username character varying,
    password character varying
);
    DROP TABLE public.empledos;
       public         heap    postgres    false    5            �            1259    16568    gerente    TABLE     o   CREATE TABLE public.gerente (
    id integer NOT NULL,
    gerente boolean,
    id_emplead integer NOT NULL
);
    DROP TABLE public.gerente;
       public         heap    postgres    false    5            �            1259    16463    habitaciones    TABLE     �   CREATE TABLE public.habitaciones (
    id integer NOT NULL,
    cantdepersonas integer,
    id_reservacion integer,
    precio integer
);
     DROP TABLE public.habitaciones;
       public         heap    postgres    false    5            �            1259    16502    reportes    TABLE     u   CREATE TABLE public.reportes (
    idr integer NOT NULL,
    reporte character varying,
    id_habitacion integer
);
    DROP TABLE public.reportes;
       public         heap    postgres    false    5            �            1259    16553    reserva_habitaciones    TABLE     .   CREATE TABLE public.reserva_habitaciones (
);
 (   DROP TABLE public.reserva_habitaciones;
       public         heap    postgres    false    5            �            1259    16458    reservas    TABLE     �   CREATE TABLE public.reservas (
    id integer NOT NULL,
    fecha_entrada date,
    fecha_salida date,
    numero_huspedes integer,
    id_cliente integer,
    preciototal integer
);
    DROP TABLE public.reservas;
       public         heap    postgres    false    5            �            1259    16397    users    TABLE     �   CREATE TABLE public.users (
    username character varying,
    id smallint NOT NULL,
    conectado boolean DEFAULT false,
    rol character varying,
    password character varying,
    mail character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false    5            �            1259    16448    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    5                      0    16561    empledos 
   TABLE DATA           :   COPY public.empledos (id, username, password) FROM stdin;
    public          postgres    false    215   "                 0    16568    gerente 
   TABLE DATA           :   COPY public.gerente (id, gerente, id_emplead) FROM stdin;
    public          postgres    false    216   ~"                 0    16463    habitaciones 
   TABLE DATA           R   COPY public.habitaciones (id, cantdepersonas, id_reservacion, precio) FROM stdin;
    public          postgres    false    212   �"                 0    16502    reportes 
   TABLE DATA           ?   COPY public.reportes (idr, reporte, id_habitacion) FROM stdin;
    public          postgres    false    213   �"                 0    16553    reserva_habitaciones 
   TABLE DATA           .   COPY public.reserva_habitaciones  FROM stdin;
    public          postgres    false    214   �"                 0    16458    reservas 
   TABLE DATA           m   COPY public.reservas (id, fecha_entrada, fecha_salida, numero_huspedes, id_cliente, preciototal) FROM stdin;
    public          postgres    false    211   #                 0    16397    users 
   TABLE DATA           M   COPY public.users (username, id, conectado, rol, password, mail) FROM stdin;
    public          postgres    false    209   3#                   0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 29, true);
          public          postgres    false    210            ~           2606    16567    empledos empledos_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.empledos
    ADD CONSTRAINT empledos_pk PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.empledos DROP CONSTRAINT empledos_pk;
       public            postgres    false    215            �           2606    16572    gerente gerente_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.gerente
    ADD CONSTRAINT gerente_pk PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.gerente DROP CONSTRAINT gerente_pk;
       public            postgres    false    216            �           2606    16586    gerente gerente_unique 
   CONSTRAINT     W   ALTER TABLE ONLY public.gerente
    ADD CONSTRAINT gerente_unique UNIQUE (id_emplead);
 @   ALTER TABLE ONLY public.gerente DROP CONSTRAINT gerente_unique;
       public            postgres    false    216            z           2606    16467    habitaciones habitaciones_pk 
   CONSTRAINT     Z   ALTER TABLE ONLY public.habitaciones
    ADD CONSTRAINT habitaciones_pk PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.habitaciones DROP CONSTRAINT habitaciones_pk;
       public            postgres    false    212            |           2606    16508    reportes reportes_pk 
   CONSTRAINT     S   ALTER TABLE ONLY public.reportes
    ADD CONSTRAINT reportes_pk PRIMARY KEY (idr);
 >   ALTER TABLE ONLY public.reportes DROP CONSTRAINT reportes_pk;
       public            postgres    false    213            x           2606    16462    reservas reservas_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.reservas
    ADD CONSTRAINT reservas_pk PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.reservas DROP CONSTRAINT reservas_pk;
       public            postgres    false    211            v           2606    16436    users users_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pk;
       public            postgres    false    209            �           2606    16587    gerente gerente_empledos_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.gerente
    ADD CONSTRAINT gerente_empledos_fk FOREIGN KEY (id_emplead) REFERENCES public.empledos(id);
 E   ALTER TABLE ONLY public.gerente DROP CONSTRAINT gerente_empledos_fk;
       public          postgres    false    3198    216    215            �           2606    16556 %   habitaciones habitaciones_reservas_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.habitaciones
    ADD CONSTRAINT habitaciones_reservas_fk FOREIGN KEY (id_reservacion) REFERENCES public.reservas(id);
 O   ALTER TABLE ONLY public.habitaciones DROP CONSTRAINT habitaciones_reservas_fk;
       public          postgres    false    212    3192    211            �           2606    16509    reportes reportes_reservas_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.reportes
    ADD CONSTRAINT reportes_reservas_fk FOREIGN KEY (id_habitacion) REFERENCES public.reservas(id);
 G   ALTER TABLE ONLY public.reportes DROP CONSTRAINT reportes_reservas_fk;
       public          postgres    false    3192    213    211            �           2606    16519    reservas reservas_users_fk    FK CONSTRAINT     |   ALTER TABLE ONLY public.reservas
    ADD CONSTRAINT reservas_users_fk FOREIGN KEY (id_cliente) REFERENCES public.users(id);
 D   ALTER TABLE ONLY public.reservas DROP CONSTRAINT reservas_users_fk;
       public          postgres    false    209    3190    211               W   x�3�t-�K-.�L.��T1JT14P���1�L�,Ȉ,�K�̏(q�H-�*��*�I�Os�0�17�4�5w3�2(�*������� ��z            x�3�,�4����� /�            x�3�42��".#3F��� EZ�            x������ � �            x������ � �            x�3��!#cNC �e������ ���         9  x���Y��XF��w��}`�)��P�"�B��� �$��o�M{����/g�}H����0��}�E�@TBq�GVY�cir�O�����ʾ���&G��QifT����qql\�s�g��.�2o����o�J�]}��ua����t[������cS�D6R�<Yj�钸W��O����_nd�~�I�/e:����u�@�����1�aM[�����ۯ�tw���Wo�I����J\�ڴ�Պ-�T,�&-g�b��!b�y������I�>4���j@q�B
�]�x����e5q��.��Ε[1A�Kޓ�t�ȭ�����Pfq��:w;�ę�W��U�w���hK��Q��Y&�:1;G�}��S��B���N$���R�\(���'�@���W3�K��JI�-3v���z�^���_<(���U)]qCl	��@��
�	�1[�P6����s)y��YD'��g
=��-��wxL�٘�����*Ʀ��f����`7ߨ�0�b�6z�焖<�����7l�RT���f�F�mZ�^*n��F�9�IV��jn�0�;�i���/d�����=.����iK��6��b^"�S��8��){�W$���vA�`����@a������s;IA ��Ϭ�@�Y������A �?,�/Ǽ]~x��N�r�o]EhlY���<���`Jy�,WV�/=k�d]} 9���:>^�oW=�p1D�3�zF)h:0�Sɟ��P�.H�3r�1؆��-���D�U�E�p|���-B��8�������a���\�����o�&��     