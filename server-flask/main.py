import execution.crawl as c
from flask import jsonify

class Main_process:
    def __init__(self):
        self.power_unit()

    def __str__(self):
        return self.result

    # def __repr__(self):
    #     return self.result

    def power_unit(self):
        self.y_d_data()
        self.set_var()
        self.d_gap_rate()
        self.profit_rate()
        self.return_side()


    def y_d_data(self):
        self.dw_list = c.main('dw')
        self.dxy_list = c.main('dxy')
        return

    def set_var(self):
        self.p_dw = self.dw_list[0]
        self.p_dxy = self.dxy_list[0]
        self.y_dw = self.dw_list[2]
        self.y_dxy = self.dxy_list[2]

    def d_gap_rate(self):
        # 달러갭비율 = 달러지수 / 원달러 * 100
        self.p_d_gap_rate = round(self.p_dxy / self.p_dw * 100, 2)
        self.y_d_gap_rate = round(self.y_dxy / self.y_dw * 100, 2)
        return

    def profit_rate(self):
        # 적정환율 = 현재 달러 지수 / 52주 평균 달러 갭 비율 * 100
        self.profit_rate = round(self.p_dxy / self.y_d_gap_rate * 100, 2)
        return

    def invest_suitability(self):
        #       52주             현재
        # 원달러           >
        # 달러지수          >
        # 달러갭           <
        # 적정환율          >
        return

    def return_side(self):
        # 순서 --> 52주(y_), 현재(p_)
        # 원달러 dw, 달러지수 dxy, 달러 갭 비율 d_gap_rate, 적정환율 profit_rate
        # 적정성 평가 >, >, <, >
        # self.result_list = [[self.y_dw, self.p_dw], [self.y_dxy, self.p_dxy], [self.y_d_gap_rate, self.p_d_gap_rate], self.profit_rate]
        self.result = f'{self.y_dw},{self.p_dw},{self.y_dxy},{self.p_dxy},{self.y_d_gap_rate},{self.p_d_gap_rate},{self.profit_rate}'
        # self.
        # self.result = tuple(self.result_list)