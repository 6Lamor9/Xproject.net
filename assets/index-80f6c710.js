(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){var i=document.querySelector(".mode-switch");i.addEventListener("click",function(){document.documentElement.classList.toggle("dark"),i.classList.toggle("active")});var s=document.querySelector(".list-view"),c=document.querySelector(".grid-view"),r=document.querySelector(".project-boxes");s.addEventListener("click",function(){c.classList.remove("active"),s.classList.add("active"),r.classList.remove("jsGridView"),r.classList.add("jsListView")}),c.addEventListener("click",function(){c.classList.add("active"),s.classList.remove("active"),r.classList.remove("jsListView"),r.classList.add("jsGridView")}),document.querySelector(".messages-btn").addEventListener("click",function(){document.querySelector(".messages-section").classList.add("show")}),document.querySelector(".messages-close").addEventListener("click",function(){document.querySelector(".messages-section").classList.remove("show")})});
