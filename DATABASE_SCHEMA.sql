
create table teams (
  id serial primary key,
  name text unique
);

create table players (
  id serial primary key,
  name text unique
);

create table squads (
  team text,
  player text,
  role text
);

create table swaps (
  team text,
  player_out text,
  player_in text,
  match_no int
);

create table match_stats (
  match_no int,
  player_name text,
  runs int
);

create table leaderboard (
  team text,
  points int
);
