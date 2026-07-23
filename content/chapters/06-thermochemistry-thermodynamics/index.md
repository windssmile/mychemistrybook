---
title: "第6章 热化学与化学热力学基础"
chapter: 6
status: cross-reviewed
estimated_core_time: "6个核心单元"
---

# 第6章 热化学与化学热力学基础

## 本章中心问题

化学变化伴随的能量怎样记账？为什么同一个初态和终态可以沿不同路径进行，却有相同
内能、焓、熵或自由能变化？为什么放热不等于一定自发，自发也不等于快速？怎样利用
无法直接实施的热化学循环获得生成焓和晶格焓？

本章建立一条条件明确的热力学路线：

```text
划定系统、环境和状态
→ 区分状态函数与过程量
→ 用第一定律记录热和功
→ 用焓处理定压热与量热
→ 用Hess定律组合热化学路径
→ 用熵描述能量与物质分散
→ 用Gibbs自由能判断恒温恒压方向
→ 区分热力学可能性、平衡限度和动力学速率
```

## 学习本章之前

### 必须掌握

- 第1章的化学方程式、反应计量、物态符号和单位换算；
- 温度、压力、体积、物质的量及有效数字；
- 正负号代表方向而不是“好坏”；
- 反应式倍乘或反向时，相关广度量也相应倍乘或变号。

### 建议回看

- [5.2](../05-intermolecular-solids/05-02-forces-to-macroscopic-properties.md)中的相变、
  蒸气压和溶解过程；
- [5.5](../05-intermolecular-solids/05-05-lattice-stability-energy.md)中的晶格形成/
  解离方向；
- [第5章复习](../05-intermolecular-solids/chapter-review.md)中的结构—性质边界。

### 3分钟诊断

1. 一杯热水“含有热”还是具有内能并可通过热传递能量？
2. 气体膨胀推动活塞时，若把气体作为系统，功的符号应先依据什么约定？
3. 同一反应的化学方程式整体乘2，摩尔反应焓数值怎样变化？
4. 放热反应是否在任何温度下都必然自发且迅速？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 更准确地说水具有内能；“热”是由温差导致的能量传递方式；
2. 先声明功的正号表示对系统做功还是系统对环境做功，本书采用前者为正；
3. 按所写反应进度，反应焓也乘2；
4. 不必然；方向还受熵和温度影响，速率还受活化能与机理影响。

</details>

## 本章学习成果

完成本章后，你应该能够：

1. 划分系统、环境和边界，区分开放、封闭与孤立系统；
2. 区分状态函数、路径函数、强度量和广度量；
3. 使用\(\Delta U=q+w\)处理简单热—功账本；
4. 使用\(w=-p_\mathrm{ext}\Delta V\)处理恒外压体积功；
5. 区分温度、热、内能和焓；
6. 处理定容/定压量热和热容计算；
7. 用Hess定律和标准生成焓求反应焓；
8. 建立基础Born–Haber循环并统一晶格焓方向；
9. 判断相变、混合和反应的基础熵变符号；
10. 用标准摩尔熵计算标准反应熵；
11. 用\(\Delta G=\Delta H-T\Delta S\)判断恒温恒压条件下的方向；
12. 解释“自发”不是“瞬时”“快速”或“完全”；
13. 分析温度改变反应倾向的四种焓—熵组合；
14. 说明反应耦合和热力学模型的边界。

## 核心单元

| 单元 | 标题 | 状态 |
|---|---|---|
| 6.1 | [系统、状态、热、功与内能](./06-01-system-state-heat-work-internal-energy.md) | 初稿完成 |
| 6.2 | [焓、热容与量热](./06-02-enthalpy-heat-capacity-calorimetry.md) | 初稿完成 |
| 6.3 | [Hess定律、生成焓与Born–Haber循环](./06-03-hess-formation-born-haber.md) | 初稿完成 |
| 6.4 | [熵与变化方向](./06-04-entropy-direction.md) | 初稿完成 |
| 6.5 | [Gibbs自由能与自发性](./06-05-gibbs-spontaneity.md) | 初稿完成 |
| 6.6 | [温度、耦合与热力学边界](./06-06-temperature-coupling-boundaries.md) | 初稿完成 |
| 章末 | [知识地图、综合练习与章节测验](./chapter-review.md) | 已完成并章内复核 |

## 本章不负责

- 完整统计热力学和配分函数；
- 不可逆过程热力学的系统推导；
- 多组分体系的化学势定量展开；
- 真实气体状态方程和逸度；
- 非标准条件下\(\Delta G=\Delta G^\circ+RT\ln Q\)
  （[7.5](../07-kinetics-equilibrium/07-05-reaction-quotient-gibbs-shift.md)）；
- 平衡常数与组成求解（[7.4](../07-kinetics-equilibrium/07-04-dynamic-equilibrium-activity-constant.md)
  至[7.6](../07-kinetics-equilibrium/07-06-equilibrium-composition-multiple.md)）；
- 反应速率、活化能和机理（[7.1](../07-kinetics-equilibrium/07-01-rate-law-order.md)
  至[7.3](../07-kinetics-equilibrium/07-03-temperature-mechanism-catalysis.md)）；
- 电化学自由能与电势定量联系（第10章）。

6.1至6.6核心单元与章末复习已完成，并执行了公式条件、符号、数值、跨节连贯性和
第5章接口回看；第7章完成后又复核了实际反应Gibbs能、平衡位置、速率与催化边界。
