# mendix 前端组件开发模板库

# 创建脚手架

```cmd
curl https://gitee.com/engalar/mendix-pluggable-widget-template/raw/master/script/new_pw.bat -o temp && type temp | more /p > new_pw.bat && del /f temp && call new_pw.bat
```

# 试用

```cmd
curl https://gitee.com/engalar/mendix-pluggable-widget-template/raw/master/script/try_pw.bat -o temp2 && type temp2 | more /p > try_pw.bat && del /f temp2 && call try_pw.bat
```

# workflowcommons$usertaskview

| id               | name       | description | starttime               | endtime                 | duedate | outcome   | state      |
| ---------------- | ---------- | ----------- | ----------------------- | ----------------------- | ------- | --------- | ---------- |
| 6473924464345089 | User Task1 |             | 2022-05-29 05:21:23.072 | 2022-05-29 05:21:53.675 |         | Outcome   | Completed  |
| 6473924464345090 | User Task2 |             | 2022-05-29 05:21:53.782 | 2022-05-29 05:32:02.586 |         | Outcome_2 | Completed  |
| 6473924464345189 | User Task1 |             | 2022-05-29 05:32:02.858 | 2022-05-29 05:32:28.188 |         | Outcome   | Completed  |
| 6473924464345190 | User Task2 |             | 2022-05-29 05:32:28.3   | 2022-05-29 05:32:50.64  |         | Outcome   | Completed  |
| 6473924464345191 | User Task3 |             | 2022-05-29 05:32:50.807 | 2022-05-29 05:33:23.8   |         | Outcome   | Completed  |
| 6473924464345289 | User Task1 |             | 2022-05-29 10:22:06.113 | 2022-05-29 10:22:34.86  |         | Outcome   | Completed  |
| 6473924464345290 | User Task2 |             | 2022-05-29 10:22:34.961 |                         |         | [null]    | InProgress |

# system$workflowusertask 非进行时的任务会被删除？

| id                | name       | description | starttime               | endtime | duedate | outcome | state      | processstate | error  |
| ----------------- | ---------- | ----------- | ----------------------- | ------- | ------- | ------- | ---------- | ------------ | ------ |
| 16325548649218250 | User Task2 |             | 2022-05-29 10:22:34.961 |         |         | [null]  | InProgress | Ready        | [null] |
