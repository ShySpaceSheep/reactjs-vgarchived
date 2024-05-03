package com.panteon.vgarchive.model;

import jakarta.persistence.*;
@Entity
public class JeepCodes {
    @Id
    private String jeepId;
    private int alpha;
    private int bravo;
    private int charlie;
    private int delta;
    private int echo;
    private int foxtrot;
    private int golf;
    private int hotel;
    private int india;
    private int juliet;
    private int kilo;
    private int lima;
    private int mike;
    private int november;
    private int oscar;
    private int papa;
    private int quebec;
    private int romeo;

    public JeepCodes() {
    }

    public String getJeepId() {
        return jeepId;
    }

    public void setJeepId(String jeepId) {
        this.jeepId = jeepId;
    }

    public int getAlpha() {
        return alpha;
    }

    public void setAlpha(int alpha) {
        this.alpha = alpha;
    }

    public int getBravo() {
        return bravo;
    }

    public void setBravo(int bravo) {
        this.bravo = bravo;
    }

    public int getCharlie() {
        return charlie;
    }

    public void setCharlie(int charlie) {
        this.charlie = charlie;
    }

    public int getDelta() {
        return delta;
    }

    public void setDelta(int delta) {
        this.delta = delta;
    }

    public int getEcho() {
        return echo;
    }

    public void setEcho(int echo) {
        this.echo = echo;
    }

    public int getFoxtrot() {
        return foxtrot;
    }

    public void setFoxtrot(int foxtrot) {
        this.foxtrot = foxtrot;
    }

    public int getGolf() {
        return golf;
    }

    public void setGolf(int golf) {
        this.golf = golf;
    }

    public int getHotel() {
        return hotel;
    }

    public void setHotel(int hotel) {
        this.hotel = hotel;
    }

    public int getIndia() {
        return india;
    }

    public void setIndia(int india) {
        this.india = india;
    }

    public int getJuliet() {
        return juliet;
    }

    public void setJuliet(int juliet) {
        this.juliet = juliet;
    }

    public int getKilo() {
        return kilo;
    }

    public void setKilo(int kilo) {
        this.kilo = kilo;
    }

    public int getLima() {
        return lima;
    }

    public void setLima(int lima) {
        this.lima = lima;
    }

    public int getMike() {
        return mike;
    }

    public void setMike(int mike) {
        this.mike = mike;
    }

    public int getNovember() {
        return november;
    }

    public void setNovember(int november) {
        this.november = november;
    }

    public int getOscar() {
        return oscar;
    }

    public void setOscar(int oscar) {
        this.oscar = oscar;
    }

    public int getPapa() {
        return papa;
    }

    public void setPapa(int papa) {
        this.papa = papa;
    }

    public int getQuebec() {
        return quebec;
    }

    public void setQuebec(int quebec) {
        this.quebec = quebec;
    }

    public int getRomeo() {
        return romeo;
    }

    public void setRomeo(int romeo) {
        this.romeo = romeo;
    }

    @Override
    public String toString(){
        return jeepId + alpha + bravo + charlie + delta + echo + foxtrot + golf + hotel + india + juliet + kilo + lima + mike + november + oscar + papa + quebec;
    }
}
