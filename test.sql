drop table if exists user_info cascade;

create sequence hibernate_sequence start 1 increment 1;

create table user_info (
   id  serial not null,
    password varchar(255),
    user_name varchar(255),
    primary key (id)
);