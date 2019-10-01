--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: calendar; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.calendar (
    cal_date date NOT NULL
);


--
-- Name: debt; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.debt (
    id_person integer NOT NULL,
    id_debt integer NOT NULL,
    id_portfolio integer NOT NULL,
    debt_sum integer NOT NULL
);


--
-- Name: person; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.person (
    id_person integer NOT NULL,
    fio text
);


--
-- Name: id_person_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.id_person_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: id_person_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.id_person_seq OWNED BY public.person.id_person;


--
-- Name: payment; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payment (
    id_debt integer NOT NULL,
    payment_sum integer NOT NULL,
    date date NOT NULL
);


--
-- Name: portfolio; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.portfolio (
    id_portfolio integer NOT NULL,
    portfolio_name text NOT NULL,
    sign_date date NOT NULL,
    end_date date NOT NULL
);


--
-- Name: person id_person; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.person ALTER COLUMN id_person SET DEFAULT nextval('public.id_person_seq'::regclass);


--
-- Data for Name: calendar; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.calendar VALUES ('2011-01-01');
INSERT INTO public.calendar VALUES ('2011-02-01');
INSERT INTO public.calendar VALUES ('2011-03-01');
INSERT INTO public.calendar VALUES ('2011-04-01');
INSERT INTO public.calendar VALUES ('2011-05-01');
INSERT INTO public.calendar VALUES ('2011-06-01');
INSERT INTO public.calendar VALUES ('2011-07-01');
INSERT INTO public.calendar VALUES ('2011-08-01');
INSERT INTO public.calendar VALUES ('2011-09-01');
INSERT INTO public.calendar VALUES ('2011-10-01');
INSERT INTO public.calendar VALUES ('2011-11-01');
INSERT INTO public.calendar VALUES ('2011-12-01');
INSERT INTO public.calendar VALUES ('2012-01-01');
INSERT INTO public.calendar VALUES ('2012-02-01');
INSERT INTO public.calendar VALUES ('2012-03-01');
INSERT INTO public.calendar VALUES ('2012-04-01');
INSERT INTO public.calendar VALUES ('2012-05-01');
INSERT INTO public.calendar VALUES ('2012-06-01');
INSERT INTO public.calendar VALUES ('2012-07-01');
INSERT INTO public.calendar VALUES ('2012-08-01');
INSERT INTO public.calendar VALUES ('2012-09-01');
INSERT INTO public.calendar VALUES ('2012-10-01');
INSERT INTO public.calendar VALUES ('2012-11-01');
INSERT INTO public.calendar VALUES ('2012-12-01');
INSERT INTO public.calendar VALUES ('2013-01-01');
INSERT INTO public.calendar VALUES ('2013-02-01');
INSERT INTO public.calendar VALUES ('2013-03-01');
INSERT INTO public.calendar VALUES ('2013-04-01');
INSERT INTO public.calendar VALUES ('2013-05-01');
INSERT INTO public.calendar VALUES ('2013-06-01');
INSERT INTO public.calendar VALUES ('2013-07-01');
INSERT INTO public.calendar VALUES ('2013-08-01');
INSERT INTO public.calendar VALUES ('2013-09-01');
INSERT INTO public.calendar VALUES ('2013-10-01');
INSERT INTO public.calendar VALUES ('2013-11-01');
INSERT INTO public.calendar VALUES ('2013-12-01');


--
-- Data for Name: debt; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.debt VALUES (1, 1, 1, 100);
INSERT INTO public.debt VALUES (2, 2, 2, 200);
INSERT INTO public.debt VALUES (3, 3, 3, 300);
INSERT INTO public.debt VALUES (4, 4, 4, 400);


--
-- Data for Name: payment; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.person VALUES (1, 'Иванов И.И.');
INSERT INTO public.person VALUES (2, 'Петров И.И.');
INSERT INTO public.person VALUES (3, 'Сидоров И.И.');
INSERT INTO public.person VALUES (4, 'Семенов И.И.');
INSERT INTO public.person VALUES (5, 'Алешин А.А.');
INSERT INTO public.person VALUES (6, 'Филимонов К.К.');


--
-- Data for Name: portfolio; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.portfolio VALUES (1, 'PORTFOLIO_1', '2011-01-01', '2011-01-21');
INSERT INTO public.portfolio VALUES (2, 'PORTFOLIO_2', '2012-05-06', '2012-09-20');
INSERT INTO public.portfolio VALUES (3, 'PORTFOLIO_3', '2012-11-21', '2013-03-16');
INSERT INTO public.portfolio VALUES (4, 'PORTFOLIO_4', '2012-12-01', '2013-06-11');


--
-- Name: id_person_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.id_person_seq', 6, true);


--
-- Name: debt debt_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.debt
    ADD CONSTRAINT debt_pkey PRIMARY KEY (id_person);


--
-- Name: person person_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (id_person);


--
-- Name: debt unique_debt_id_debt; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.debt
    ADD CONSTRAINT unique_debt_id_debt UNIQUE (id_debt);


--
-- Name: debt unique_debt_id_portfolio; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.debt
    ADD CONSTRAINT unique_debt_id_portfolio UNIQUE (id_portfolio);


--
-- Name: payment unique_payment_id_debt; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT unique_payment_id_debt UNIQUE (id_debt);


--
-- Name: portfolio unique_portfolio_id_portfolio; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.portfolio
    ADD CONSTRAINT unique_portfolio_id_portfolio UNIQUE (id_portfolio);


--
-- Name: debt lnk_debt_debt; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.debt
    ADD CONSTRAINT lnk_debt_debt FOREIGN KEY (id_portfolio) REFERENCES public.debt(id_portfolio) MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: payment lnk_debt_payment; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT lnk_debt_payment FOREIGN KEY (id_debt) REFERENCES public.debt(id_debt) MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: debt lnk_person_debt; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.debt
    ADD CONSTRAINT lnk_person_debt FOREIGN KEY (id_person) REFERENCES public.person(id_person) MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

