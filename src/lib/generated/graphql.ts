/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  uuid: string;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "user_keys" */
  delete_user_keys?: Maybe<User_Keys_Mutation_Response>;
  /** delete single row from the table: "user_keys" */
  delete_user_keys_by_pk?: Maybe<User_Keys>;
  /** delete data from the table: "user_sessions" */
  delete_user_sessions?: Maybe<User_Sessions_Mutation_Response>;
  /** delete single row from the table: "user_sessions" */
  delete_user_sessions_by_pk?: Maybe<User_Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "user_keys" */
  insert_user_keys?: Maybe<User_Keys_Mutation_Response>;
  /** insert a single row into the table: "user_keys" */
  insert_user_keys_one?: Maybe<User_Keys>;
  /** insert data into the table: "user_sessions" */
  insert_user_sessions?: Maybe<User_Sessions_Mutation_Response>;
  /** insert a single row into the table: "user_sessions" */
  insert_user_sessions_one?: Maybe<User_Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "user_keys" */
  update_user_keys?: Maybe<User_Keys_Mutation_Response>;
  /** update single row of the table: "user_keys" */
  update_user_keys_by_pk?: Maybe<User_Keys>;
  /** update multiples rows of table: "user_keys" */
  update_user_keys_many?: Maybe<Array<Maybe<User_Keys_Mutation_Response>>>;
  /** update data of the table: "user_sessions" */
  update_user_sessions?: Maybe<User_Sessions_Mutation_Response>;
  /** update single row of the table: "user_sessions" */
  update_user_sessions_by_pk?: Maybe<User_Sessions>;
  /** update multiples rows of table: "user_sessions" */
  update_user_sessions_many?: Maybe<Array<Maybe<User_Sessions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_User_KeysArgs = {
  where: User_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Keys_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_SessionsArgs = {
  where: User_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_User_KeysArgs = {
  objects: Array<User_Keys_Insert_Input>;
  on_conflict?: InputMaybe<User_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Keys_OneArgs = {
  object: User_Keys_Insert_Input;
  on_conflict?: InputMaybe<User_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_SessionsArgs = {
  objects: Array<User_Sessions_Insert_Input>;
  on_conflict?: InputMaybe<User_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Sessions_OneArgs = {
  object: User_Sessions_Insert_Input;
  on_conflict?: InputMaybe<User_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_User_KeysArgs = {
  _set?: InputMaybe<User_Keys_Set_Input>;
  where: User_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Keys_By_PkArgs = {
  _set?: InputMaybe<User_Keys_Set_Input>;
  pk_columns: User_Keys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Keys_ManyArgs = {
  updates: Array<User_Keys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_SessionsArgs = {
  _inc?: InputMaybe<User_Sessions_Inc_Input>;
  _set?: InputMaybe<User_Sessions_Set_Input>;
  where: User_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sessions_By_PkArgs = {
  _inc?: InputMaybe<User_Sessions_Inc_Input>;
  _set?: InputMaybe<User_Sessions_Set_Input>;
  pk_columns: User_Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sessions_ManyArgs = {
  updates: Array<User_Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "user_keys" */
  user_keys: Array<User_Keys>;
  /** fetch aggregated fields from the table: "user_keys" */
  user_keys_aggregate: User_Keys_Aggregate;
  /** fetch data from the table: "user_keys" using primary key columns */
  user_keys_by_pk?: Maybe<User_Keys>;
  /** fetch data from the table: "user_sessions" */
  user_sessions: Array<User_Sessions>;
  /** fetch aggregated fields from the table: "user_sessions" */
  user_sessions_aggregate: User_Sessions_Aggregate;
  /** fetch data from the table: "user_sessions" using primary key columns */
  user_sessions_by_pk?: Maybe<User_Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootUser_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Keys_Order_By>>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};


export type Query_RootUser_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Keys_Order_By>>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};


export type Query_RootUser_Keys_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_SessionsArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Query_RootUser_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Query_RootUser_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "user_keys" */
  user_keys: Array<User_Keys>;
  /** fetch aggregated fields from the table: "user_keys" */
  user_keys_aggregate: User_Keys_Aggregate;
  /** fetch data from the table: "user_keys" using primary key columns */
  user_keys_by_pk?: Maybe<User_Keys>;
  /** fetch data from the table in a streaming manner: "user_keys" */
  user_keys_stream: Array<User_Keys>;
  /** fetch data from the table: "user_sessions" */
  user_sessions: Array<User_Sessions>;
  /** fetch aggregated fields from the table: "user_sessions" */
  user_sessions_aggregate: User_Sessions_Aggregate;
  /** fetch data from the table: "user_sessions" using primary key columns */
  user_sessions_by_pk?: Maybe<User_Sessions>;
  /** fetch data from the table in a streaming manner: "user_sessions" */
  user_sessions_stream: Array<User_Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootUser_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Keys_Order_By>>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};


export type Subscription_RootUser_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Keys_Order_By>>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};


export type Subscription_RootUser_Keys_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Keys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Keys_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};


export type Subscription_RootUser_SessionsArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Subscription_RootUser_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Subscription_RootUser_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Sessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** The different ways a user can authenticate through the app */
export type User_Keys = {
  __typename?: 'user_keys';
  hashed_password?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_keys" */
export type User_Keys_Aggregate = {
  __typename?: 'user_keys_aggregate';
  aggregate?: Maybe<User_Keys_Aggregate_Fields>;
  nodes: Array<User_Keys>;
};

/** aggregate fields of "user_keys" */
export type User_Keys_Aggregate_Fields = {
  __typename?: 'user_keys_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Keys_Max_Fields>;
  min?: Maybe<User_Keys_Min_Fields>;
};


/** aggregate fields of "user_keys" */
export type User_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_keys". All fields are combined with a logical 'AND'. */
export type User_Keys_Bool_Exp = {
  _and?: InputMaybe<Array<User_Keys_Bool_Exp>>;
  _not?: InputMaybe<User_Keys_Bool_Exp>;
  _or?: InputMaybe<Array<User_Keys_Bool_Exp>>;
  hashed_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_keys" */
export enum User_Keys_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserKeysPkey = 'user_keys_pkey'
}

/** input type for inserting data into table "user_keys" */
export type User_Keys_Insert_Input = {
  hashed_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Keys_Max_Fields = {
  __typename?: 'user_keys_max_fields';
  hashed_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Keys_Min_Fields = {
  __typename?: 'user_keys_min_fields';
  hashed_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_keys" */
export type User_Keys_Mutation_Response = {
  __typename?: 'user_keys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Keys>;
};

/** on_conflict condition type for table "user_keys" */
export type User_Keys_On_Conflict = {
  constraint: User_Keys_Constraint;
  update_columns?: Array<User_Keys_Update_Column>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "user_keys". */
export type User_Keys_Order_By = {
  hashed_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_keys */
export type User_Keys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_keys" */
export enum User_Keys_Select_Column {
  /** column name */
  HashedPassword = 'hashed_password',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_keys" */
export type User_Keys_Set_Input = {
  hashed_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "user_keys" */
export type User_Keys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Keys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Keys_Stream_Cursor_Value_Input = {
  hashed_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_keys" */
export enum User_Keys_Update_Column {
  /** column name */
  HashedPassword = 'hashed_password',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

export type User_Keys_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Keys_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Keys_Bool_Exp;
};

/** columns and relationships of "user_sessions" */
export type User_Sessions = {
  __typename?: 'user_sessions';
  active_expires: Scalars['bigint'];
  id: Scalars['uuid'];
  idle_expires: Scalars['bigint'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_sessions" */
export type User_Sessions_Aggregate = {
  __typename?: 'user_sessions_aggregate';
  aggregate?: Maybe<User_Sessions_Aggregate_Fields>;
  nodes: Array<User_Sessions>;
};

/** aggregate fields of "user_sessions" */
export type User_Sessions_Aggregate_Fields = {
  __typename?: 'user_sessions_aggregate_fields';
  avg?: Maybe<User_Sessions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Sessions_Max_Fields>;
  min?: Maybe<User_Sessions_Min_Fields>;
  stddev?: Maybe<User_Sessions_Stddev_Fields>;
  stddev_pop?: Maybe<User_Sessions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Sessions_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sessions_Sum_Fields>;
  var_pop?: Maybe<User_Sessions_Var_Pop_Fields>;
  var_samp?: Maybe<User_Sessions_Var_Samp_Fields>;
  variance?: Maybe<User_Sessions_Variance_Fields>;
};


/** aggregate fields of "user_sessions" */
export type User_Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Sessions_Avg_Fields = {
  __typename?: 'user_sessions_avg_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_sessions". All fields are combined with a logical 'AND'. */
export type User_Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<User_Sessions_Bool_Exp>>;
  _not?: InputMaybe<User_Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<User_Sessions_Bool_Exp>>;
  active_expires?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  idle_expires?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_sessions" */
export enum User_Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserSessionsPkey = 'user_sessions_pkey'
}

/** input type for incrementing numeric columns in table "user_sessions" */
export type User_Sessions_Inc_Input = {
  active_expires?: InputMaybe<Scalars['bigint']>;
  idle_expires?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "user_sessions" */
export type User_Sessions_Insert_Input = {
  active_expires?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  idle_expires?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Sessions_Max_Fields = {
  __typename?: 'user_sessions_max_fields';
  active_expires?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  idle_expires?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Sessions_Min_Fields = {
  __typename?: 'user_sessions_min_fields';
  active_expires?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  idle_expires?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_sessions" */
export type User_Sessions_Mutation_Response = {
  __typename?: 'user_sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Sessions>;
};

/** on_conflict condition type for table "user_sessions" */
export type User_Sessions_On_Conflict = {
  constraint: User_Sessions_Constraint;
  update_columns?: Array<User_Sessions_Update_Column>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "user_sessions". */
export type User_Sessions_Order_By = {
  active_expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  idle_expires?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_sessions */
export type User_Sessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_sessions" */
export enum User_Sessions_Select_Column {
  /** column name */
  ActiveExpires = 'active_expires',
  /** column name */
  Id = 'id',
  /** column name */
  IdleExpires = 'idle_expires',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_sessions" */
export type User_Sessions_Set_Input = {
  active_expires?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  idle_expires?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Sessions_Stddev_Fields = {
  __typename?: 'user_sessions_stddev_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Sessions_Stddev_Pop_Fields = {
  __typename?: 'user_sessions_stddev_pop_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Sessions_Stddev_Samp_Fields = {
  __typename?: 'user_sessions_stddev_samp_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user_sessions" */
export type User_Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Sessions_Stream_Cursor_Value_Input = {
  active_expires?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  idle_expires?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type User_Sessions_Sum_Fields = {
  __typename?: 'user_sessions_sum_fields';
  active_expires?: Maybe<Scalars['bigint']>;
  idle_expires?: Maybe<Scalars['bigint']>;
};

/** update columns of table "user_sessions" */
export enum User_Sessions_Update_Column {
  /** column name */
  ActiveExpires = 'active_expires',
  /** column name */
  Id = 'id',
  /** column name */
  IdleExpires = 'idle_expires',
  /** column name */
  UserId = 'user_id'
}

export type User_Sessions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Sessions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Sessions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Sessions_Var_Pop_Fields = {
  __typename?: 'user_sessions_var_pop_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Sessions_Var_Samp_Fields = {
  __typename?: 'user_sessions_var_samp_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Sessions_Variance_Fields = {
  __typename?: 'user_sessions_variance_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['uuid'];
  username: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "username" */
  UsersUsernameKey = 'users_username_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UsersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQueryQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', username: string }> };


export const UsersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UsersQueryQuery, UsersQueryQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  uuid: string;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "user_keys" */
  delete_user_keys?: Maybe<User_Keys_Mutation_Response>;
  /** delete single row from the table: "user_keys" */
  delete_user_keys_by_pk?: Maybe<User_Keys>;
  /** delete data from the table: "user_sessions" */
  delete_user_sessions?: Maybe<User_Sessions_Mutation_Response>;
  /** delete single row from the table: "user_sessions" */
  delete_user_sessions_by_pk?: Maybe<User_Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "user_keys" */
  insert_user_keys?: Maybe<User_Keys_Mutation_Response>;
  /** insert a single row into the table: "user_keys" */
  insert_user_keys_one?: Maybe<User_Keys>;
  /** insert data into the table: "user_sessions" */
  insert_user_sessions?: Maybe<User_Sessions_Mutation_Response>;
  /** insert a single row into the table: "user_sessions" */
  insert_user_sessions_one?: Maybe<User_Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "user_keys" */
  update_user_keys?: Maybe<User_Keys_Mutation_Response>;
  /** update single row of the table: "user_keys" */
  update_user_keys_by_pk?: Maybe<User_Keys>;
  /** update multiples rows of table: "user_keys" */
  update_user_keys_many?: Maybe<Array<Maybe<User_Keys_Mutation_Response>>>;
  /** update data of the table: "user_sessions" */
  update_user_sessions?: Maybe<User_Sessions_Mutation_Response>;
  /** update single row of the table: "user_sessions" */
  update_user_sessions_by_pk?: Maybe<User_Sessions>;
  /** update multiples rows of table: "user_sessions" */
  update_user_sessions_many?: Maybe<Array<Maybe<User_Sessions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_User_KeysArgs = {
  where: User_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Keys_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_SessionsArgs = {
  where: User_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_User_KeysArgs = {
  objects: Array<User_Keys_Insert_Input>;
  on_conflict?: InputMaybe<User_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Keys_OneArgs = {
  object: User_Keys_Insert_Input;
  on_conflict?: InputMaybe<User_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_SessionsArgs = {
  objects: Array<User_Sessions_Insert_Input>;
  on_conflict?: InputMaybe<User_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Sessions_OneArgs = {
  object: User_Sessions_Insert_Input;
  on_conflict?: InputMaybe<User_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_User_KeysArgs = {
  _set?: InputMaybe<User_Keys_Set_Input>;
  where: User_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Keys_By_PkArgs = {
  _set?: InputMaybe<User_Keys_Set_Input>;
  pk_columns: User_Keys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Keys_ManyArgs = {
  updates: Array<User_Keys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_SessionsArgs = {
  _inc?: InputMaybe<User_Sessions_Inc_Input>;
  _set?: InputMaybe<User_Sessions_Set_Input>;
  where: User_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sessions_By_PkArgs = {
  _inc?: InputMaybe<User_Sessions_Inc_Input>;
  _set?: InputMaybe<User_Sessions_Set_Input>;
  pk_columns: User_Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sessions_ManyArgs = {
  updates: Array<User_Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "user_keys" */
  user_keys: Array<User_Keys>;
  /** fetch aggregated fields from the table: "user_keys" */
  user_keys_aggregate: User_Keys_Aggregate;
  /** fetch data from the table: "user_keys" using primary key columns */
  user_keys_by_pk?: Maybe<User_Keys>;
  /** fetch data from the table: "user_sessions" */
  user_sessions: Array<User_Sessions>;
  /** fetch aggregated fields from the table: "user_sessions" */
  user_sessions_aggregate: User_Sessions_Aggregate;
  /** fetch data from the table: "user_sessions" using primary key columns */
  user_sessions_by_pk?: Maybe<User_Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootUser_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Keys_Order_By>>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};


export type Query_RootUser_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Keys_Order_By>>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};


export type Query_RootUser_Keys_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_SessionsArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Query_RootUser_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Query_RootUser_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "user_keys" */
  user_keys: Array<User_Keys>;
  /** fetch aggregated fields from the table: "user_keys" */
  user_keys_aggregate: User_Keys_Aggregate;
  /** fetch data from the table: "user_keys" using primary key columns */
  user_keys_by_pk?: Maybe<User_Keys>;
  /** fetch data from the table in a streaming manner: "user_keys" */
  user_keys_stream: Array<User_Keys>;
  /** fetch data from the table: "user_sessions" */
  user_sessions: Array<User_Sessions>;
  /** fetch aggregated fields from the table: "user_sessions" */
  user_sessions_aggregate: User_Sessions_Aggregate;
  /** fetch data from the table: "user_sessions" using primary key columns */
  user_sessions_by_pk?: Maybe<User_Sessions>;
  /** fetch data from the table in a streaming manner: "user_sessions" */
  user_sessions_stream: Array<User_Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootUser_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Keys_Order_By>>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};


export type Subscription_RootUser_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Keys_Order_By>>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};


export type Subscription_RootUser_Keys_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Keys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Keys_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};


export type Subscription_RootUser_SessionsArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Subscription_RootUser_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Subscription_RootUser_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Sessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** The different ways a user can authenticate through the app */
export type User_Keys = {
  __typename?: 'user_keys';
  hashed_password?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_keys" */
export type User_Keys_Aggregate = {
  __typename?: 'user_keys_aggregate';
  aggregate?: Maybe<User_Keys_Aggregate_Fields>;
  nodes: Array<User_Keys>;
};

/** aggregate fields of "user_keys" */
export type User_Keys_Aggregate_Fields = {
  __typename?: 'user_keys_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Keys_Max_Fields>;
  min?: Maybe<User_Keys_Min_Fields>;
};


/** aggregate fields of "user_keys" */
export type User_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_keys". All fields are combined with a logical 'AND'. */
export type User_Keys_Bool_Exp = {
  _and?: InputMaybe<Array<User_Keys_Bool_Exp>>;
  _not?: InputMaybe<User_Keys_Bool_Exp>;
  _or?: InputMaybe<Array<User_Keys_Bool_Exp>>;
  hashed_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_keys" */
export enum User_Keys_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserKeysPkey = 'user_keys_pkey'
}

/** input type for inserting data into table "user_keys" */
export type User_Keys_Insert_Input = {
  hashed_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Keys_Max_Fields = {
  __typename?: 'user_keys_max_fields';
  hashed_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Keys_Min_Fields = {
  __typename?: 'user_keys_min_fields';
  hashed_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_keys" */
export type User_Keys_Mutation_Response = {
  __typename?: 'user_keys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Keys>;
};

/** on_conflict condition type for table "user_keys" */
export type User_Keys_On_Conflict = {
  constraint: User_Keys_Constraint;
  update_columns?: Array<User_Keys_Update_Column>;
  where?: InputMaybe<User_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "user_keys". */
export type User_Keys_Order_By = {
  hashed_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_keys */
export type User_Keys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_keys" */
export enum User_Keys_Select_Column {
  /** column name */
  HashedPassword = 'hashed_password',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_keys" */
export type User_Keys_Set_Input = {
  hashed_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "user_keys" */
export type User_Keys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Keys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Keys_Stream_Cursor_Value_Input = {
  hashed_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_keys" */
export enum User_Keys_Update_Column {
  /** column name */
  HashedPassword = 'hashed_password',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

export type User_Keys_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Keys_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Keys_Bool_Exp;
};

/** columns and relationships of "user_sessions" */
export type User_Sessions = {
  __typename?: 'user_sessions';
  active_expires: Scalars['bigint'];
  id: Scalars['uuid'];
  idle_expires: Scalars['bigint'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_sessions" */
export type User_Sessions_Aggregate = {
  __typename?: 'user_sessions_aggregate';
  aggregate?: Maybe<User_Sessions_Aggregate_Fields>;
  nodes: Array<User_Sessions>;
};

/** aggregate fields of "user_sessions" */
export type User_Sessions_Aggregate_Fields = {
  __typename?: 'user_sessions_aggregate_fields';
  avg?: Maybe<User_Sessions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Sessions_Max_Fields>;
  min?: Maybe<User_Sessions_Min_Fields>;
  stddev?: Maybe<User_Sessions_Stddev_Fields>;
  stddev_pop?: Maybe<User_Sessions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Sessions_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sessions_Sum_Fields>;
  var_pop?: Maybe<User_Sessions_Var_Pop_Fields>;
  var_samp?: Maybe<User_Sessions_Var_Samp_Fields>;
  variance?: Maybe<User_Sessions_Variance_Fields>;
};


/** aggregate fields of "user_sessions" */
export type User_Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Sessions_Avg_Fields = {
  __typename?: 'user_sessions_avg_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_sessions". All fields are combined with a logical 'AND'. */
export type User_Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<User_Sessions_Bool_Exp>>;
  _not?: InputMaybe<User_Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<User_Sessions_Bool_Exp>>;
  active_expires?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  idle_expires?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_sessions" */
export enum User_Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserSessionsPkey = 'user_sessions_pkey'
}

/** input type for incrementing numeric columns in table "user_sessions" */
export type User_Sessions_Inc_Input = {
  active_expires?: InputMaybe<Scalars['bigint']>;
  idle_expires?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "user_sessions" */
export type User_Sessions_Insert_Input = {
  active_expires?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  idle_expires?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Sessions_Max_Fields = {
  __typename?: 'user_sessions_max_fields';
  active_expires?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  idle_expires?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Sessions_Min_Fields = {
  __typename?: 'user_sessions_min_fields';
  active_expires?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  idle_expires?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_sessions" */
export type User_Sessions_Mutation_Response = {
  __typename?: 'user_sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Sessions>;
};

/** on_conflict condition type for table "user_sessions" */
export type User_Sessions_On_Conflict = {
  constraint: User_Sessions_Constraint;
  update_columns?: Array<User_Sessions_Update_Column>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "user_sessions". */
export type User_Sessions_Order_By = {
  active_expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  idle_expires?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_sessions */
export type User_Sessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_sessions" */
export enum User_Sessions_Select_Column {
  /** column name */
  ActiveExpires = 'active_expires',
  /** column name */
  Id = 'id',
  /** column name */
  IdleExpires = 'idle_expires',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_sessions" */
export type User_Sessions_Set_Input = {
  active_expires?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  idle_expires?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Sessions_Stddev_Fields = {
  __typename?: 'user_sessions_stddev_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Sessions_Stddev_Pop_Fields = {
  __typename?: 'user_sessions_stddev_pop_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Sessions_Stddev_Samp_Fields = {
  __typename?: 'user_sessions_stddev_samp_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user_sessions" */
export type User_Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Sessions_Stream_Cursor_Value_Input = {
  active_expires?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  idle_expires?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type User_Sessions_Sum_Fields = {
  __typename?: 'user_sessions_sum_fields';
  active_expires?: Maybe<Scalars['bigint']>;
  idle_expires?: Maybe<Scalars['bigint']>;
};

/** update columns of table "user_sessions" */
export enum User_Sessions_Update_Column {
  /** column name */
  ActiveExpires = 'active_expires',
  /** column name */
  Id = 'id',
  /** column name */
  IdleExpires = 'idle_expires',
  /** column name */
  UserId = 'user_id'
}

export type User_Sessions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Sessions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Sessions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Sessions_Var_Pop_Fields = {
  __typename?: 'user_sessions_var_pop_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Sessions_Var_Samp_Fields = {
  __typename?: 'user_sessions_var_samp_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Sessions_Variance_Fields = {
  __typename?: 'user_sessions_variance_fields';
  active_expires?: Maybe<Scalars['Float']>;
  idle_expires?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['uuid'];
  username: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "username" */
  UsersUsernameKey = 'users_username_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};


export const UsersQuery = gql`
    query UsersQuery {
  users {
    username
  }
}
    `;