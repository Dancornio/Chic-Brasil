create table administrador(
  id_adm  serial primary key,
  nome varchar(50) not null,
  email varchar(50) not null
);

create table cliente(
    id_cliente smallserial primary key,
    cpf varchar(11) unique,
    nome varchar(50) not null,
    email varchar(50) not null unique,
    telefone varchar(20) unique
);
create table produto(
    id_produto serial primary key,
    valor money not null,
    qtd_estoque int not null
);
create table pedido(
    id_cliente smallint,
    id_pedido serial primary key,
    horario_pedido smalldatetime not null,
    situacao varchar(20) not null,
    foreign key(id_cliente) references cliente(id_cliente)
);

create table item_pedido(
    id_cliente smallint,
    id_produto int,
    qtd_pedida smallint,
    valor_venda money,
    foreign key(id_produto) references produto(id_produto),
    foreign key(id_cliente) references cliente(id_cliente),
    primary key(id_cliente,id_produto)
);

