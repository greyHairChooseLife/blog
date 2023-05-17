## main 브랜치의 용도

bolier plate. 다음에도 블로그 따위를 만들 때 사용할 뼈대다. 그러니까 main이 배포 되지는 않는다.

## 각 브랜치별 용도

| branch name | 용도         | history 관리                          |
| :---------: | :----------- | :------------------------------------ |
|    main     | boiler plate | O                                     |
|     dev     | 기능 개발    | O                                     |
|    post     | 포스트 작성  | X, posting commit에 계속 --amend한다. |

## `post branch`에서 진행

node script를 통해 gh-pages 패키지를 실행한다.

`"deploy": "git checkout post && gatsby build && gh-pages -f -d public -b deploy"`

## 블로그 포스팅 작업 순서

1. `post branch`에서 글 작성
2. `git commit --amend`, last commit은 반드시 post만 담고 있다.
3. `post branch`에서 배포

## 블로그 기능 업데이트의 작업 순서

1. `dev branch`에서 기능 개발
2. `post branch`에서 rebase dev
3. `post branch`에서 배포
